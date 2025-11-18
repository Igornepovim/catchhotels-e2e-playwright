import { test } from '@playwright/test';
import { OrderPage } from '../../page-objects/OrderPage';
import { BookingDetailsPage } from '../../page-objects/BookingDetailPage';
import { UnpayableBookingUrl } from '../../enums/url.enum';
import type { Country } from '../../enums/country.enum';

test.describe('Order Page – Unpayable Booking.com Links', () => {

  test('Booking, link that cannot be paid', async ({ page }, testInfo) => {
    const country = testInfo.project.name as Country;

    const order = new OrderPage(page, country);
    const details = new BookingDetailsPage(page, country);
    const url = UnpayableBookingUrl.FY8KPF;

    await order.open();
    await order.enterBookingUrl(url);
    await order.submit();

    await details.expectLoaded();
    await details.expectContinueDisabled();
    await details.expectAllRoomsCannotBePaidOnline();
  });

});
