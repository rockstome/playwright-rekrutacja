import { test } from '@playwright/test';
import { TodoPage } from '../../../src/pages/TodoPage';

// Zadanie: napisz klasę src/pages/TodoPage.ts tak, żeby test przeszedł.

test('dodawanie i usuwanie zadań', async ({ page }) => {
  const todoPage = new TodoPage(page);

  await todoPage.goto();
  await todoPage.add('Zadanie A');
  await todoPage.add('Zadanie B');
  await todoPage.add('Zadanie C');
  await todoPage.expectCount(3);

  await todoPage.remove('Zadanie B');
  await todoPage.expectCount(2);
});
