import { test } from '@playwright/test';
import { LoginPage } from '../../../src/pages/LoginPage';

// Zadanie: uzupełnij klasę src/pages/LoginPage.ts tak, żeby testy przeszły.
// Dodatkowo: skonfiguruj ten describe tak, żeby testy szły równolegle.

test.describe('logowanie', () => {
  test('poprawne dane', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.expectMessage('You logged into a secure area!');
  });

  test('błędne hasło', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login('tomsmith', 'wrong_password');
    await loginPage.expectMessage('Your password is invalid!');
  });
});
