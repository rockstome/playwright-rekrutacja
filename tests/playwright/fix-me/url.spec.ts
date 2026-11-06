import { test, expect } from '@playwright/test';

// Zadanie: test nie przechodzi. Napraw go.

test('po zalogowaniu użytkownik trafia na listę produktów', async ({ page }) => {
  await page.goto('https://www.saucedemo.com');
  await page.locator('#user-name').fill('standard_user');
  await page.locator('#password').fill('secret_sauce');
  await page.locator('#login-button').click();

  await expect(page).toHaveURL('inventory.html');
});
