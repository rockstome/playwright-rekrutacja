import { test, expect } from '@playwright/test';

// Zadanie: test nie przechodzi. Napraw go – bez waitForTimeout.

test('po kliknięciu Start pojawia się "Hello World!"', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/dynamic_loading/2');
  await page.getByRole('button', { name: 'Start' }).click();

  await page.waitForTimeout(3000);
  const visible = await page.getByText('Hello World!').isVisible();
  expect(visible).toBe(true);
});
