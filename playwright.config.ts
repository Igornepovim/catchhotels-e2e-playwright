import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  testDir: './tests',
  timeout: 40_000,
  workers: 4,

  reporter: [
    ['html', { open: 'never' }],
    ['list'],
  ],

  use: {
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on',
  },

  projects: [
    {
      name: 'CZ',
      use: {
        baseURL: process.env.CZ_URL,
      },
    },
    {
      name: 'PL',
      use: {
        baseURL: process.env.PL_URL,
      },
    },
  ],
});
