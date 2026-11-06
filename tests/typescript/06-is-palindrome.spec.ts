import { test, expect } from '@playwright/test';

// Return true if the text reads the same forwards and backwards.
// Ignore letter case, spaces and punctuation.
// isPalindrome('Kayak') -> true

function isPalindrome(text: string): boolean {
  throw new Error('TODO');
}

test('isPalindrome', () => {
  expect(isPalindrome('Kayak')).toBe(true);
  expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  expect(isPalindrome('Playwright')).toBe(false);
  expect(isPalindrome('')).toBe(true);
});
