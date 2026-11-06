import { test, expect } from '@playwright/test';

// Zadanie: dodaj produkt do koszyka, przejdź przez checkout i sprawdź, że podsumowanie zawiera poprawną cenę.

test('podsumowanie zamówienia zawiera poprawną cenę', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // TODO
});
