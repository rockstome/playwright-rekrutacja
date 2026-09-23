import { type Page, type Locator, expect } from '@playwright/test';

/**
 * ============================================================================
 * KLASA: CartPage (Zadanie 6)
 * ============================================================================
 * Stwórz klasę CartPage od podstaw lub uzupełnij brakujące pola i metody,
 * aby obsłużyć scenariusz koszyka zakupowego w aplikacji TodoMVC lub podobnej.
 */
export class CartPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
    // TODO dla kandydata: Dodaj pola i lokatory (np. lista produktów, przyciski akcji)
  }

  // TODO dla kandydata: Zaimplementuj metody:
  // - async goto(): przejście na stronę https://demo.playwright.dev/todomvc/
  // - async addItem(name: string): dodanie nowego elementu
  // - async removeItem(name: string): usunięcie (najedź myszką i kliknij przycisk 'destroy')
  // - async assertItemsCount(expectedCount: number): asercja liczby elementów na liście
}
