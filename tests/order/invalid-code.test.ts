import { test, expect } from '@playwright/test';
import { goToCheckout } from '../../flow/checkoutFlow';
import type { Country } from '../../enums/country.enum';

test('Rejects invalid voucher code', async ({ page }, testInfo) => {
  const country = testInfo.project.name as Country;

  const checkout = await goToCheckout(page, country);
  await checkout.expectLoaded();

  const invalidCode = `INVALID_${Date.now()}`;
  const errorLocator = await checkout.applyInvalidVoucher(invalidCode);

  await expect(errorLocator).toContainText(
    /(není?\s+platn|není\s+platn|neplatn|nie\s+jest\s+ważn|nieważn)/i,
    { timeout: 5000 }
  );
});
