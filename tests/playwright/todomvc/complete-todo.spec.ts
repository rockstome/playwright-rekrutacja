import { test, expect } from '@playwright/test';

// Zadanie: dodaj 3 zadania, oznacz drugie jako ukończone i sprawdź, że licznik pokazuje "2 items left".

test('ukończenie zadania zmniejsza licznik', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/');

  // TODO
});
