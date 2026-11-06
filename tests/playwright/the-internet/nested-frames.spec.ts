import { test, expect } from '@playwright/test';

// Zadanie: sprawdź, że środkowa ramka zawiera tekst "MIDDLE".

test('środkowa ramka zawiera tekst MIDDLE', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/nested_frames');

  // TODO
});
