import { test, expect } from '@playwright/test';

// Zadanie: test nie przechodzi. Napraw lokatory.

test('kliknięcie "Add Element" dodaje przycisk "Delete"', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');

  await page.locator('button.add-element').click();

  await expect(page.locator('#delete-button')).toBeVisible();
});
