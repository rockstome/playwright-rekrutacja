import { test, expect } from '@playwright/test';

// Zadanie: strona pobiera listę owoców z "*/**/api/v1/fruits".
// Podmień odpowiedź na własną listę dwóch owoców i sprawdź, że strona je wyświetla.

test('strona wyświetla zamockowane owoce', async ({ page }) => {
  // TODO

  await page.goto('https://demo.playwright.dev/api-mocking');

  // TODO
});
