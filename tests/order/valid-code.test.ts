import { test, expect } from '@playwright/test';
import { goToCheckout } from '../../flow/checkoutFlow';
import { Country } from '../../enums/country.enum';
import { VoucherCode } from '../../enums/voucher.enum';

test('Accepts valid voucher code (CZ only)', async ({ page }, testInfo) => {
  const country = testInfo.project.name as Country;

  // Skip for anything except CZ
  if (country !== Country.CZ) {
    test.skip('Valid voucher test is available only in CZ');
  }

  const checkout = await goToCheckout(page, country);
  await checkout.expectLoaded();

  const validCode = VoucherCode.CZ_VALID;

  const successLocator = await checkout.applyValidVoucher(validCode);

  await expect(successLocator).toContainText(
    /Kupón.*(aktivov[aá]n|uplatn[eě]n)|Cena byla z(ní|ni)žena/i,
    { timeout: 7000 }
  );
});
