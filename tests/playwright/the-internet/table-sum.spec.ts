import { test, expect } from '@playwright/test';

// Zadanie: policz sumę kolumny "Due" w pierwszej tabeli i sprawdź, że wynosi $251.00.

test('suma kolumny Due wynosi $251.00', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');

  // TODO
});
