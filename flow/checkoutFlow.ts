import { CheckoutPage } from '../page-objects/CheckoutPage';
import { startBookingFlow } from './bookingFlow';
import type { Country } from '../enums/country.enum';
import { i18n } from '../i18n';

export async function goToCheckout(page, country: Country) {
  const details = await startBookingFlow(page, country);

  await details.expectContinueDisabled();
  await details.openRoomDropdown();
  await details.selectRoomCount(1);
  await details.expectContinueEnabled();

  await details.clickContinue();

  const checkoutPattern = i18n[country].checkout.urlPattern;

  await page.waitForURL(checkoutPattern, {
    timeout: 20000,
  });

  const checkout = new CheckoutPage(page, country);
  await checkout.expectLoaded();

  return checkout;
}
