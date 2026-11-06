import { test, expect } from '@playwright/test';

// Return a new array without duplicates. Keep the order of first occurrences.
// removeDuplicates([1, 2, 1, 3, 2]) -> [1, 2, 3]

function removeDuplicates<T>(items: T[]): T[] {
  throw new Error('TODO');
}

test('removeDuplicates', () => {
  expect(removeDuplicates([1, 2, 1, 3, 2])).toEqual([1, 2, 3]);
  expect(removeDuplicates(['b', 'a', 'b'])).toEqual(['b', 'a']);
  expect(removeDuplicates([])).toEqual([]);
});
