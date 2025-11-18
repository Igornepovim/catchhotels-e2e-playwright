import type { Page } from '@playwright/test';
import { generateBookingDraftUrl } from '../utils/getBookingUrl';
import { BookingDetailsPage } from '../page-objects/BookingDetailPage';
import type { Country } from '../enums/country.enum';

export async function startBookingFlow(
  page: Page,
  country: Country
): Promise<BookingDetailsPage> {

  const uuidUrl = await generateBookingDraftUrl(page, country);

  const details = new BookingDetailsPage(page, country);
  await details.openWithUrl(uuidUrl);
  await details.expectLoaded();

  return details;
}
