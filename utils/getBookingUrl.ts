import type { Page } from '@playwright/test';
import { OrderPage } from '../page-objects/OrderPage';
import { BookingUrl } from '../enums/url.enum';
import type { Country } from '../enums/country.enum';

function getRandomBookingUrl(): BookingUrl {
  const urls = Object.values(BookingUrl);
  return urls[Math.floor(Math.random() * urls.length)];
}

export async function generateBookingDraftUrl(
  page: Page,
  country: Country
): Promise<string> {

  const order = new OrderPage(page, country);

  const selectedUrl = getRandomBookingUrl();

  await order.open();
  await order.enterBookingUrl(selectedUrl);
  await order.submit();

  return await order.getRedirectedUbytovaniUrl();
}
