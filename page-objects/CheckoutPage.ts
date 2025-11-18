import { expect } from '@playwright/test';
import { BasePage } from './BasePage';
import { i18n } from '../i18n';

export class CheckoutPage extends BasePage {
  private get t() {
    return i18n[this.country].checkout;
  }

  //
  // Locators
  //
  private get headerTitle() {
    return this.page.locator('.header-page__title h1');
  }

  private get submitBtn() {
    return this.page.getByRole('button', { name: this.t.submit });
  }

  //
  // Navigation
  //
  async openWithUrl(url: string) {
    await this.page.goto(url, { waitUntil: 'domcontentloaded' });
    await this.dismissCookies();
  }

  //
  // Load verification
  //
  async expectLoaded() {
    await this.page.waitForURL(this.t.urlPattern, { timeout: 15000 });

    await expect(this.headerTitle).toHaveText(this.t.title);

    // Wait for ANY visible input to guarantee form is ready
    await expect(
      this.page.locator('.order-form .input-default__input').first()
    ).toBeVisible({ timeout: 7000 });

    await expect(this.submitBtn).toBeVisible();
  }

  //
  // Customer Info Form (CZ + PL)
  //
  async fillCustomerInfo(info: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street: string;
    houseNumber: string;
    zip: string;
    city: string;
  }) {
    const L = this.t.labels;

    // Names + Contact
    await this.page.getByLabel(L.firstName).fill(info.firstName);
    await this.page.getByLabel(L.lastName).fill(info.lastName);
    await this.page.getByLabel(L.email).fill(info.email);
    await this.page.getByLabel(L.phone).fill(info.phone);

    // Address fields (CZ + PL)
    await this.page.getByLabel(L.street).click();
    await this.page.getByLabel(L.street).fill(info.street);

    await this.page.getByLabel(L.houseNumber).fill(info.houseNumber);
    await this.page.getByLabel(L.zip).fill(info.zip);
    await this.page.getByLabel(L.city).fill(info.city);
  }

  //
  // Payment selector
  //
  private async clickPaymentOption(label: string) {
    const dropdown = this.page.locator('.select__button').nth(1);

    // Dropdown version (CZ)
    if (await dropdown.isVisible()) {
      await dropdown.click();
      const options = this.page.locator('.select__list .select__list-item');
      await options.first().waitFor({ timeout: 3000 });
      await this.page.getByText(label, { exact: true }).click();
      return;
    }

    // Tile version (PL)
    const tile = this.page
      .locator('.select__payment-select-wrapper')
      .filter({ has: this.page.getByText(label, { exact: true }) });

    await tile.first().waitFor({ timeout: 3000 });
    await tile.first().click();
  }

  async selectPaymentMethod(method: keyof typeof this.t.payment) {
    await this.clickPaymentOption(this.t.payment[method]);
  }

  async selectPolishPaymentCard() {
    await this.clickPaymentOption(this.t.payment.card);
  }

  //
  // Voucher (CZ + PL)
  //
  async applyVoucher(code: string) {
    if (!this.t.voucher.open) return;

    await this.page.getByRole('button', { name: this.t.voucher.open }).click();

    await this.page.getByPlaceholder(this.t.voucher.placeholder).fill(code);

    await this.page
      .getByRole('button', { name: this.t.voucher.apply })
      .click();
  }

  //
  // Invalid voucher → unified container
  //
  async applyInvalidVoucher(code: string) {
    await this.applyVoucher(code);

    const error = this.page.locator('.payment-form__active-coupon-inner');

    await error.waitFor({ timeout: 5000 });

    return error;
  }

  //
  // Valid voucher
  //
  async applyValidVoucher(code: string) {
    await this.applyVoucher(code);

    const success = this.page.locator('.payment-form__active-coupon-inner');

    await success.waitFor({ timeout: 7000 });

    return success;
  }

  //
  // Required checkboxes
  //
  async acceptAllRequiredConditions() {
    const requiredInputs = this.page.locator(
      'input.input-checkbox__input#cancellation-conditions, input.input-checkbox__input#business-conditions'
    );

    const count = await requiredInputs.count();
    for (let i = 0; i < count; i++) {
      const checkbox = requiredInputs.nth(i);
      if (!(await checkbox.isChecked())) {
        await checkbox.check({ force: true });
      }
    }
  }

  //
  // Submit
  //
  async submitBooking() {
    await this.submitBtn.click();
  }
}
