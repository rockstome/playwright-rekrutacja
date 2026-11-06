import { test, expect } from '@playwright/test';

// Count the vowels (a, e, i, o, u) in the text. Ignore letter case.
// countVowels('Hello World') -> 3

function countVowels(text: string): number {
  throw new Error('TODO');
}

test('countVowels', () => {
  expect(countVowels('Hello World')).toBe(3);
  expect(countVowels('AEIOU')).toBe(5);
  expect(countVowels('rhythm')).toBe(0);
});
