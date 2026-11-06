import { test, expect } from '@playwright/test';

// Return true if every bracket is closed in the correct order. Brackets: () [] {}
// isValid('([]{})') -> true
// isValid('(]') -> false

function isValid(text: string): boolean {
  throw new Error('TODO');
}

test('isValid', () => {
  expect(isValid('()')).toBe(true);
  expect(isValid('([]{})')).toBe(true);
  expect(isValid('(]')).toBe(false);
  expect(isValid('([)]')).toBe(false);
  expect(isValid('((')).toBe(false);
  expect(isValid('')).toBe(true);
});
