import { test } from '@playwright/test';
import { LoginPage } from '../../src/pages/LoginPage';

/**
 * ============================================================================
 * ZADANIE 5: Implementacja metod we wzorcu Page Object Model (POM)
 * Poziom trudności: 🟡 Średni
 * ============================================================================
 * 
 * OPIS ZADANIA:
 * W pliku `src/pages/LoginPage.ts` znajduje się szkielet klasy `LoginPage`.
 * Twoim celem jest:
 * 1. Zdefiniowanie poprawnych lokatorów w konstruktorze `LoginPage`.
 * 2. Zaimplementowanie metody `login(username, password)`.
 * 3. Zaimplementowanie metody `assertFlashMessageContains(expectedText)`.
 * 
 * Po poprawnym uzupełnieniu klasy poniższe 2 testy powinny przejść pomyślnie.
 * 
 * Uruchomienie testu: `npm run test:task05`
 */

test.describe('Zadanie 5: Testy logowania z wykorzystaniem LoginPage POM', () => {
  test('powinien pomyślnie zalogować użytkownika przy poprawnych danych', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'SuperSecretPassword!');
    await loginPage.assertFlashMessageContains('You logged into a secure area!');
  });

  test('powinien wyświetlić błąd przy błędnym haśle', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('tomsmith', 'ZleHaslo123');
    await loginPage.assertFlashMessageContains('Your password is invalid!');
  });
});
