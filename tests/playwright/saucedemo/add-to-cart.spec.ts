import { test, expect } from '@playwright/test';

// Zadanie: dodaj produkt do koszyka i sprawdź, że licznik koszyka w prawym górnym rogu pokazuje 1.

test('po dodaniu produktu licznik koszyka pokazuje 1', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // TODO
});
