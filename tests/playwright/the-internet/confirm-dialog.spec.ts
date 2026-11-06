import { test, expect } from '@playwright/test';

// Zadanie: kliknij "Click for JS Confirm", anuluj okno i sprawdź wynik na stronie.

test('anulowanie okna confirm', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // TODO
});
