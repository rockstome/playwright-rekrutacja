import { test, expect } from '@playwright/test';

// Return the sum of all even numbers in the array.
// sumOfEvens([1, 2, 3, 4]) -> 6

function sumOfEvens(numbers: number[]): number {
  throw new Error('TODO');
}

test('sumOfEvens', () => {
  expect(sumOfEvens([1, 2, 3, 4])).toBe(6);
  expect(sumOfEvens([1, 3, 5])).toBe(0);
  expect(sumOfEvens([-2, 10])).toBe(8);
  expect(sumOfEvens([])).toBe(0);
});
