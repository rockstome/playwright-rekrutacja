import { type Page } from '@playwright/test';

export class LoginPage {
  constructor(readonly page: Page) {}

  async goto() {
    await this.page.goto('https://the-internet.herokuapp.com/login');
  }

  async login(username: string, password: string) {
    throw new Error('TODO');
  }

  async expectMessage(text: string) {
    throw new Error('TODO');
  }
}
