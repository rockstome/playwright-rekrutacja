import { test, expect } from '@playwright/test';

// Zadanie: test nie przechodzi. Napraw go.

test('usunięcie jednego z trzech elementów', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
  const add = page.getByRole('button', { name: 'Add Element' });
  await add.click();
  await add.click();
  await add.click();

  await page.getByRole('button', { name: 'Delete' }).click();

  await expect(page.getByRole('button', { name: 'Delete' })).toHaveCount(2);
});
