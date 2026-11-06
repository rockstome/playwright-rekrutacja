import { test, expect } from '@playwright/test';

// Zadanie: test nie przechodzi. Napraw go.

test('tytuł strony kończy się na "Playwright"', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/^Playwright$/);
});
