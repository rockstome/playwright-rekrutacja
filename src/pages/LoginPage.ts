import { type Page, type Locator, expect } from '@playwright/test';

/**
 * ============================================================================
 * KLASA: LoginPage (Wzorzec Page Object Model)
 * ============================================================================
 * Twoim zadaniem jest uzupełnienie brakujących lokatorów oraz implementacja
 * logiki w metodach klasy LoginPage.
 */
export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  readonly flashMessage: Locator;

  constructor(page: Page) {
    this.page = page;

    // TODO dla kandydata: Zdefiniuj odpowiednie lokatory
    this.usernameInput = page.locator('#TODO_ZASTAP_PRAWIDLOWYM_SELEKTOREM');
    this.passwordInput = page.locator('#TODO_ZASTAP_PRAWIDLOWYM_SELEKTOREM');
    this.loginButton = page.locator('#TODO_ZASTAP_PRAWIDLOWYM_SELEKTOREM');
    this.flashMessage = page.locator('#TODO_ZASTAP_PRAWIDLOWYM_SELEKTOREM');
  }

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  /**
   * TODO dla kandydata:
   * Uzupełnij metodę, która wypełni login, hasło i kliknie przycisk logowania.
   */
  async login(username: string, password: string): Promise<void> {
    throw new Error('Metoda login() nie została jeszcze zaimplementowana!');
  }

  /**
   * TODO dla kandydata:
   * Uzupełnij asercję sprawdzającą, czy komunikat flash zawiera podany tekst.
   */
  async assertFlashMessageContains(expectedText: string): Promise<void> {
    throw new Error('Metoda assertFlashMessageContains() nie została jeszcze zaimplementowana!');
  }
}
