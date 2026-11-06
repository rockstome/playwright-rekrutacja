import { test, expect } from '@playwright/test';

// Return the indexes of the two numbers that add up to target.
// You can assume there is exactly one answer.
// twoSum([2, 7, 11, 15], 9) -> [0, 1]

function twoSum(numbers: number[], target: number): [number, number] {
  throw new Error('TODO');
}

test('twoSum', () => {
  expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  expect(twoSum([3, 3], 6)).toEqual([0, 1]);
});
