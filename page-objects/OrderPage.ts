import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { i18n } from '../i18n';

export class OrderPage extends BasePage {

  private get t() {
    return i18n[this.country].order;
  }

  // --------------------------------------------------
  // OPEN PAGE
  // --------------------------------------------------
  async open() {
    await this.goto(this.t.pageTitle);
  }

  // --------------------------------------------------
  // INPUT + SUBMIT
  // --------------------------------------------------
  async enterBookingUrl(url: string) {
    await this.page.locator('#hotel-link').fill(url);
  }

  async submit() {
    await this.page.getByRole('button', { name: this.t.submit }).click();
  }

  // --------------------------------------------------
  // REDIRECT VALIDATION
  // --------------------------------------------------
  async getRedirectedUbytovaniUrl() {
    await this.page.waitForURL(this.t.redirectPattern, { timeout: 15000 });
    return this.page.url();
  }

  // --------------------------------------------------
  // BANNERS
  // --------------------------------------------------
  private bannerLocator = this.page.locator(
    '.form-hotel-check__notifications [role="alert"]'
  );

  async expectBanner() {
    await expect(this.bannerLocator.filter({ hasText: this.t.banner })).toBeVisible();
  }

  async expectAdultErrorBanner() {
    await expect(this.bannerLocator.filter({ hasText: this.t.adultError })).toBeVisible();
  }

  // --------------------------------------------------
  // MODAL (shared logic)
  // --------------------------------------------------
  private get modal() {
    return this.page.locator('.modal-default__content');
  }

  private async expectModalWithText(text: string) {
    await expect(this.modal).toBeVisible();
    await expect(this.modal.getByText(text)).toBeVisible();
  }

  async expectModal() {
    await this.expectModalWithText(this.t.modal);
  }

  async expectAdultErrorModal() {
    await this.expectModalWithText(this.t.adultError);
  }

  // --------------------------------------------------
  // CLOSE MODAL
  // --------------------------------------------------
  async closeModal() {
    await this.page
      .locator('.modal-default')
      .getByRole('button', { name: this.t.close })
      .click();

    await this.page.waitForTimeout(300);
  }
}
