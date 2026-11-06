import { test, expect } from '@playwright/test';

// Make the first letter of every word uppercase and the rest lowercase.
// capitalizeWords('hello wORLD') -> 'Hello World'

function capitalizeWords(text: string): string {
  throw new Error('TODO');
}

test('capitalizeWords', () => {
  expect(capitalizeWords('hello wORLD')).toBe('Hello World');
  expect(capitalizeWords('playwright')).toBe('Playwright');
  expect(capitalizeWords('')).toBe('');
});
