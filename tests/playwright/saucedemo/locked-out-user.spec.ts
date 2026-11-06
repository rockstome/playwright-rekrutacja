import { test, expect } from '@playwright/test';

// Zadanie: zaloguj się jako "locked_out_user" (hasło "secret_sauce") i sprawdź komunikat błędu.

test('zablokowany użytkownik nie może się zalogować', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // TODO
});
