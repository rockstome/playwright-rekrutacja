import { test, expect } from '@playwright/test';

// Zadanie: w formularzu checkout wypełnij imię i nazwisko, pomiń kod pocztowy i sprawdź komunikat błędu.

test('checkout bez kodu pocztowego pokazuje błąd', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  // TODO
});
