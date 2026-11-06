import { test, expect } from '@playwright/test';

// Zadanie: kliknij nagłówek "Last Name" w pierwszej tabeli i sprawdź, że nazwiska są posortowane alfabetycznie.

test('sortowanie tabeli po nazwisku', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/tables');

  // TODO
});
