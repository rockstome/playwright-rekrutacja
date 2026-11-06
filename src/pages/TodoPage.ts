import { type Page } from '@playwright/test';

// https://demo.playwright.dev/todomvc/
export class TodoPage {
  constructor(readonly page: Page) {}

  // TODO: goto(), add(name), remove(name), expectCount(count)
}
