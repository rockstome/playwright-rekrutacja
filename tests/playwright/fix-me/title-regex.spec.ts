import { test, expect } from '@playwright/test';

// Zadanie: test nie przechodzi. Napraw go.

test('tytuł strony zawiera "Playwright"', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/playwright/);
});
