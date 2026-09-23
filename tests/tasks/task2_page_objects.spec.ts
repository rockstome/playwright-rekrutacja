import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

/**
 * ZADANIE 2: Wzorzec Page Object Model (POM)
 * Cel: Sprawdzenie umiejętności architektury kodu testowego, enkapsulacji i reużywalności.
 */
test.describe('Zadanie 2: Page Object Model', () => {
  test('powinien zalogować użytkownika przy użyciu Page Object Model', async ({ page }) => {
    const loginPage = new LoginPage(page);

    // 1. Otwórz stronę logowania
    await loginPage.goto();

    // 2. Zaloguj się prawidłowymi danymi
    await loginPage.login('tomsmith', 'SuperSecretPassword!');

    // 3. Zweryfikuj pomyślne logowanie
    await loginPage.assertLoginSuccess();
  });
});
