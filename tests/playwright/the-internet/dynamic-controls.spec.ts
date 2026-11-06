import { test, expect } from '@playwright/test';

// Zadanie: kliknij "Remove" i sprawdź, że checkbox zniknął. Potem kliknij "Enable" i wpisz tekst w pole.

test('dynamiczne usuwanie checkboxa i włączanie pola tekstowego', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_controls');

  // TODO
});
