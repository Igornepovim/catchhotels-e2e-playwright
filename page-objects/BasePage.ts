import { expect, type Page, type Locator } from '@playwright/test';
import type { Country } from '../enums/country.enum';

export class BasePage {
  protected page: Page;
  protected country: Country;
  
  constructor(page: Page, country: Country) {
    this.page = page;
    this.country = country;
  }
  
  async goto(path = ''): Promise<void> {
    await this.page.goto(path);
    await this.dismissCookies();
  }

  async waitForVisible(selector: string | Locator): Promise<Locator> {
    const el = typeof selector === 'string'
      ? this.page.locator(selector)
      : selector;

    await el.waitFor({ state: 'visible' });
    return el;
  }

  async click(selector: string | Locator): Promise<void> {
    const el = await this.waitForVisible(selector);
    await el.click();
  }

  async assertTextIsVisible(text: string | RegExp): Promise<void> {
    await expect(this.page.getByText(text)).toBeVisible();
  }

  async fill(selector: string | Locator, value: string): Promise<void> {
    const el = await this.waitForVisible(selector);
    await el.fill(value);
  }

  async dismissCookies(): Promise<void> {
    const allowBtn = this.page.locator(
      '#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll'
    );

    try {
      if (await allowBtn.isVisible({ timeout: 500 })) {
        await allowBtn.click();
      }
    } catch {}
  }
}
