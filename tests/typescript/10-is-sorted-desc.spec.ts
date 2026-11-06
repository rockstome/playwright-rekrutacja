import { test, expect } from '@playwright/test';

// Return true if the numbers are sorted from largest to smallest (equal neighbours are allowed).
// isSortedDesc([5, 3, 3, 1]) -> true

function isSortedDesc(numbers: number[]): boolean {
  throw new Error('TODO');
}

test('isSortedDesc', () => {
  expect(isSortedDesc([5, 3, 3, 1])).toBe(true);
  expect(isSortedDesc([5, 6, 1])).toBe(false);
  expect(isSortedDesc([1])).toBe(true);
  expect(isSortedDesc([])).toBe(true);
});
