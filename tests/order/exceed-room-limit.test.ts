import { test } from '@playwright/test';
import { startBookingFlow } from '../../flow/bookingFlow';
import type { Country } from '../../enums/country.enum';

test('cannot select more rooms than number of adults', async ({ page }, testInfo) => {
  const country = testInfo.project.name as Country;

  const details = await startBookingFlow(page, country);

  await details.expectContinueDisabled();

  const adults = await details.getNumberOfAdults();

  await details.openRoomDropdown();
  await details.selectRoomCount(adults + 1);

  await details.expectContinueEnabled();

  await details.clickContinue();

  await details.expectAdultsLessThanProductsError();
});
