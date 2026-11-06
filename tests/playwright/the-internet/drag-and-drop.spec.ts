import { test, expect } from '@playwright/test';

// Zadanie: przeciągnij A na B i sprawdź, że kolumny zamieniły się miejscami.

test('przeciągnięcie A na B zamienia kolumny', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/drag_and_drop');

  // TODO
});
