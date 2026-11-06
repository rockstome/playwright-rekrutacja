import { test, expect } from '@playwright/test';

// Zadanie: dodaj dwa produkty, usuń jeden z nich i sprawdź licznik koszyka. Potem usuń drugi – licznik powinien zniknąć.

test('usuwanie produktów z koszyka aktualizuje licznik', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // TODO
});
