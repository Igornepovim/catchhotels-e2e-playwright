import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { i18n } from '../i18n';

export class BookingDetailsPage extends BasePage {

  // Short local getter to CZ/PL dictionary
  private get t() {
    return i18n[this.country].bookingDetails;
  }

  //
  // Locators
  //
  private get footer() {
    return this.page.locator('.order-summary__footer');
  }

  get continueButton() {
    return this.footer.getByRole('button', { name: this.t.continue });
  }

  get firstCard() {
    return this.page.locator('.product-item__option').first();
  }

  //
  // Navigation
  //
  async openWithUrl(url: string) {
    await this.page.goto(url);
    await this.dismissCookies();
  }

  //
  // Loaded State
  //
  async expectLoaded() {
    await this.page.waitForURL(this.t.urlPattern, { timeout: 15000 });
  
    await expect(this.page.locator('.header-page__title h1'))
      .toHaveText(this.t.title);
  
    await expect(this.firstCard).toBeVisible({ timeout: 7000 });
  }

  //
  // Continue Button
  //
  async expectContinueDisabled() {
    await expect(this.continueButton).toHaveClass(/is-disabled/);
  }

  async expectContinueEnabled() {
    await expect(this.continueButton).not.toHaveClass(/is-disabled/);
    await expect(this.continueButton).toBeEnabled();
  }

  async clickContinue() {
    await this.continueButton.click();
  }

  //
  // Room Selection
  //
  async openRoomDropdown() {
    const toggle = this.firstCard.locator('.select__select-wrapper .select__button');

    await expect(toggle).toBeVisible();
    await toggle.click();
  }

  async selectRoomCount(count: number) {
    const option = this.firstCard
      .locator('.select__list-item .select__list-button')
      .filter({ hasText: String(count) })
      .first();

    await expect(option).toBeVisible();
    await option.click();
    await this.page.waitForTimeout(150);
  }

  //
  // Adults extraction
  //
  async getNumberOfAdults(): Promise<number> {
    const label = this.t.adultsLabel;
  
    const row = this.page
      .locator('.order-summary__info-item')
      .filter({ hasText: label })
      .filter({ has: this.page.locator('.order-summary__info-value:visible') })
      .first();
  
    const text = await row.locator('.order-summary__info-value').innerText();
    const match = text.match(/\d+/);
  
    if (!match) {
      throw new Error(`Could not extract adults number from: "${text}"`);
    }
  
    return Number(match[0]);
  }
  
  //
  // Payment availability errors
  //
  async expectAllRoomsCannotBePaidOnline() {
    const msg = this.t.cannotPay;

    const cards = this.page.locator('.product-item__option');
    const errors = this.page.locator(
      `.product-item__option-footer:has-text("${msg}")`
    );

    await expect(errors).toHaveCount(await cards.count());
  }

  //
  // Adults < rooms error
  //
  async expectAdultsLessThanProductsError() {
    const node = this.page.locator('.tiles-info.is-error.is-large .tiles-info__label');
  
    await expect(node).toHaveText(this.t.adultsLessThanProductsError);
  }  
}
