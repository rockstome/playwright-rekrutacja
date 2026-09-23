import { test, expect } from '@playwright/test';

test.describe('Przykładowe testy Playwright w Chrome', () => {
  test('powinien załadować stronę główną Playwright i zweryfikować tytuł', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Weryfikacja tytułu strony
    await expect(page).toHaveTitle(/Playwright/);
  });

  test('powinien przejść do sekcji Getting Started po kliknięciu Get started', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // Kliknięcie linku 'Get started'
    await page.getByRole('link', { name: 'Get started' }).click();

    // Weryfikacja, czy nagłówek Installation jest widoczny
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
});
