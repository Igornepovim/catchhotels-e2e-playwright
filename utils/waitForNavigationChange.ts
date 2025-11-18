import type { Page } from '@playwright/test';

export async function waitForUrlChange(page: Page, timeout = 5000) {
  const previous = page.url();
  await page.waitForFunction(
    (prev) => window.location.href !== prev,
    previous,
    { timeout }
  );
}
