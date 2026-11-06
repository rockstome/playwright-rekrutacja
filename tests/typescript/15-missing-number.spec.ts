import { test, expect } from '@playwright/test';

// The array contains all numbers from 0 to n except one. Return the missing number.
// missingNumber([3, 0, 1]) -> 2

function missingNumber(numbers: number[]): number {
  throw new Error('TODO');
}

test('missingNumber', () => {
  expect(missingNumber([3, 0, 1])).toBe(2);
  expect(missingNumber([0, 1])).toBe(2);
  expect(missingNumber([1])).toBe(0);
});
