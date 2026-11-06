import { test, expect } from '@playwright/test';

// Zadanie: zmień sortowanie na "Name (Z to A)" i sprawdź kolejność produktów.

test('sortowanie "Name (Z to A)" układa produkty w odwrotnej kolejności alfabetycznej', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // TODO
});
