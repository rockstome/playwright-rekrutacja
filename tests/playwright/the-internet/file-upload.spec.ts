import { test, expect } from '@playwright/test';

// Zadanie: wgraj dowolny plik i sprawdź, że strona pokazuje jego nazwę.

test('wgranie pliku', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/upload');

  // TODO
});
