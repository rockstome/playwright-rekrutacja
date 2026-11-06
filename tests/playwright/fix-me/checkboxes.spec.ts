import { test, expect } from '@playwright/test';

// Zadanie: test nie przechodzi. Napraw go.

test('oba checkboxy są zaznaczone', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');
  const checkboxes = page.getByRole('checkbox');

  await checkboxes.nth(0).click();
  await checkboxes.nth(1).click();

  await expect(checkboxes.nth(0)).toBeChecked();
  await expect(checkboxes.nth(1)).toBeChecked();
});
