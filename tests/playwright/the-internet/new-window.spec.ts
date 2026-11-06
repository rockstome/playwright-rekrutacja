import { test, expect } from '@playwright/test';

// Zadanie: kliknij "Click Here" i sprawdź nagłówek w nowo otwartej karcie.

test('link otwiera nową kartę', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/windows');

  // TODO
});
