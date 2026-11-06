import { test, expect } from '@playwright/test';

// Zadanie: kliknij "Click for JS Prompt", wpisz "Tester" i sprawdź wynik na stronie.

test('wpisanie tekstu w okno prompt', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  // TODO
});
