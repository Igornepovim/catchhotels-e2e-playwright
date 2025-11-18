import { test, expect } from '@playwright/test';
import { goToCheckout } from '../../flow/checkoutFlow';
import type { Country } from '../../enums/country.enum';
import { customer } from '../../test-data/customer';
import { i18n } from '../../i18n';

test.describe('Checkout – Customer Info + Payment', () => {

  test('Happy Path (CZ: Pluxee | PL: Voucher + Card)', async ({ page }, testInfo) => {
    const country = testInfo.project.name as Country;

    const checkout = await goToCheckout(page, country);
    await checkout.expectLoaded();

    const data = customer[country];
    await checkout.fillCustomerInfo({
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email(),
      phone: data.phone,
      street: data.street,
      houseNumber: data.houseNumber,
      zip: data.zip,
      city: data.city,
    });

    await checkout.acceptAllRequiredConditions();

    if (country === 'CZ') {
      await checkout.selectPaymentMethod('pluxee');
    } else {
      await checkout.applyVoucher('TestCode123');
      await checkout.selectPolishPaymentCard();
    }

    await checkout.submitBooking();

    await page.waitForURL(i18n[country].checkout.urlPattern, { timeout: 15000 });

    await expect(page.locator('.status-info__title')).toHaveText(
      i18n[country].checkout.successTitle,
      { timeout: 15000 }
    );
  });

});
