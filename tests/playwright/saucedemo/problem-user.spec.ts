import { test, expect } from '@playwright/test';

// Zadanie: każdy produkt na liście powinien mieć inne zdjęcie.
// Napisz jeden test i uruchom go dla użytkowników "standard_user" i "problem_user" (hasło "secret_sauce").

test('każdy produkt ma inne zdjęcie', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');

  // TODO
});
