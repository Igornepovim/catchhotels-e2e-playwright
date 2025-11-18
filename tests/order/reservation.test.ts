import { test } from '@playwright/test';
import { startBookingFlow } from '../../flow/bookingFlow';
import type { Country } from '../../enums/country.enum';
import { waitForUrlChange } from '../../utils/waitForNavigationChange';

test.describe('Happy Path – Booking Details', () => {

  test('select 1 room and continue', async ({ page }, testInfo) => {
    const country = testInfo.project.name as Country;

    const details = await startBookingFlow(page, country);

    await details.expectContinueDisabled();
    await details.openRoomDropdown();
    await details.selectRoomCount(1);
    await details.expectContinueEnabled();

    await details.clickContinue();

    await waitForUrlChange(page);
  });

});
