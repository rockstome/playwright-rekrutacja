import { test, expect } from '@playwright/test';

// Zadanie: najedź myszką na drugi obrazek i sprawdź, że pojawił się podpis "name: user2".

test('podpis pojawia się po najechaniu myszką', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');

  // TODO
});
