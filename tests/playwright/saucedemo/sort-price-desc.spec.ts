import { test, expect } from '@playwright/test';

// Zadanie: zmień sortowanie na "Price (high to low)" i sprawdź kolejność produktów.
// Poniższy kod sprawdza nazwy, a ma sprawdzać ceny.

test('sortowanie "Price (high to low)" układa produkty od najdroższego', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  const productNames = await page.locator('.inventory_item_name').allTextContents();
  const sortedNames = [...productNames].sort((a, b) => a.localeCompare(b));
  expect(productNames).toEqual(sortedNames);
});
