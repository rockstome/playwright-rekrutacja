import { test, expect } from '@playwright/test';

// Zadanie: strona pobiera listę owoców z "*/**/api/v1/fruits".
// Nie podmieniaj całej odpowiedzi – dopisz do prawdziwej listy jeden owoc i sprawdź, że widać i stare, i nowy.

test('do prawdziwej listy owoców dopisany jest nowy owoc', async ({ page }) => {
  // TODO

  await page.goto('https://demo.playwright.dev/api-mocking');

  // TODO
});
