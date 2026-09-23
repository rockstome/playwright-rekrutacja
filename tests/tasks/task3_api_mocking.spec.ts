import { test, expect } from '@playwright/test';

/**
 * ZADANIE 3: Mockowanie zapytań sieciowych (Network Interception / Mocking)
 * Cel: Sprawdzenie umiejętności przechwytywania i modyfikacji ruchu HTTP przez page.route().
 */
test.describe('Zadanie 3: Mockowanie API', () => {
  test('powinien podmienić odpowiedź API i wyświetlić zamockowane dane w UI', async ({ page }) => {
    // 1. Zmockuj zapytanie do API zwracające listę elementów
    await page.route('*/**/api/v1/fruits', async (route) => {
      const mockResponse = [
        { name: 'Truskawka Rekrutacyjna', id: 101 },
        { name: 'Banan Testowy', id: 102 }
      ];
      await route.fulfill({
        contentType: 'application/json',
        body: JSON.stringify(mockResponse)
      });
    });

    // 2. Przejdź na stronę demonstracyjną korzystającą z tego API
    await page.goto('https://demo.playwright.dev/api-mocking');

    // 3. Zweryfikuj, że na stronie pojawił się zamockowany owoc
    await expect(page.getByText('Truskawka Rekrutacyjna')).toBeVisible();
    await expect(page.getByText('Banan Testowy')).toBeVisible();
  });
});
