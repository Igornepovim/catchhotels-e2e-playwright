import { test } from '@playwright/test';
import { OrderPage } from '../../page-objects/OrderPage';
import { UnsupportedLink } from '../../enums/url.enum';
import type { Country } from '../../enums/country.enum';

type Scenario = {
  name: string;
  url: UnsupportedLink;
  banner?: boolean;
  modal?: boolean;
  adultError?: boolean;
};

test.describe('OrderPage – invalid URL scenarios', () => {

  const scenarios: Scenario[] = [
    {
      name: 'Invalid text (not a URL)',
      url: UnsupportedLink.INVALID_TEXT,
      banner: true,
      modal: true,
    },
    {
      name: 'Random non-booking URL',
      url: UnsupportedLink.RANDOM_URL,
      banner: true,
    },
    {
      name: 'Broken Booking.com URL (missing hotel ID)',
      url: UnsupportedLink.BROKEN_BOOKING,
      adultError: true,
    },
  ];

  for (const scenario of scenarios) {
    test(scenario.name, async ({ page }, testInfo) => {
      const country = testInfo.project.name as Country;
      const order = new OrderPage(page, country);

      await order.open();
      await order.enterBookingUrl(scenario.url);
      await order.submit();

      if (scenario.adultError) {
        await order.expectAdultErrorBanner();
        await order.expectAdultErrorModal();
        await order.closeModal();
        return;
      }

      if (scenario.banner) {
        await order.expectBanner();
      }

      if (scenario.modal) {
        await order.expectModal();
        await order.closeModal();
      }
    });
  }
});
