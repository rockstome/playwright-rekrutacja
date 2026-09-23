import { test, expect } from '@playwright/test';

/**
 * ZADANIE 1: Podstawowe akcje i asercje (Formularz)
 * Cel: Sprawdzenie umiejętności doboru lokatorów (getByRole, getByLabel itp.) oraz asercji Playwright.
 */
test.describe('Zadanie 1: Formularz i selektory', () => {
  test('powinien poprawnie wypełnić i wysłać formularz kontaktowy', async ({ page }) => {
    // 1. Przejdź pod adres przykładowej strony
    await page.goto('https://demo.playwright.dev/todomvc/');

    // 2. TODO dla kandydata:
    // - Dodaj 3 nowe zadania: "Kupić mleko", "Napisać testy", "Wdrożyć na produkcję"
    // - Oznacz drugie zadanie ("Napisać testy") jako ukończone (checkbox)
    // - Zweryfikuj, że na liście pozostały 2 aktywne zadania (sprawdź licznik 'items left')
    // - Zweryfikuj, że element "Napisać testy" ma klasę 'completed'

    const newTodoInput = page.getByPlaceholder('What needs to be done?');
    await newTodoInput.fill('Kupić mleko');
    await newTodoInput.press('Enter');

    await newTodoInput.fill('Napisać testy');
    await newTodoInput.press('Enter');

    await newTodoInput.fill('Wdrożyć na produkcję');
    await newTodoInput.press('Enter');

    // Kliknij checkbox przy drugim zadaniu
    const todoItem = page.getByTestId('todo-item').filter({ hasText: 'Napisać testy' });
    await todoItem.getByRole('checkbox').check();

    // Asercje
    await expect(todoItem).toHaveClass(/completed/);
    await expect(page.getByTestId('todo-count')).toContainText('2 items left');
  });
});
