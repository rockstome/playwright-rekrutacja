import { test, expect } from '@playwright/test';

// Zadanie: dodaj 3 dowolne produkty i sprawdź, że "Item total" w podsumowaniu to suma ich cen.

test('Item total to suma cen produktów', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // TODO
});
