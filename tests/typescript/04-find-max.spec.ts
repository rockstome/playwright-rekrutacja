import { test, expect } from '@playwright/test';

// Return the largest number in the array, or undefined if the array is empty.
// Do not use Math.max.
// findMax([3, 7, 2]) -> 7

function findMax(numbers: number[]): number | undefined {
  throw new Error('TODO');
}

test('findMax', () => {
  expect(findMax([3, 7, 2])).toBe(7);
  expect(findMax([-5, -1, -9])).toBe(-1);
  expect(findMax([42])).toBe(42);
  expect(findMax([])).toBeUndefined();
});
