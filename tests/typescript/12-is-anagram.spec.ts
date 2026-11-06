import { test, expect } from '@playwright/test';

// Return true if both words contain exactly the same letters (ignore letter case).
// isAnagram('listen', 'silent') -> true

function isAnagram(a: string, b: string): boolean {
  throw new Error('TODO');
}

test('isAnagram', () => {
  expect(isAnagram('listen', 'silent')).toBe(true);
  expect(isAnagram('Tester', 'Street')).toBe(true);
  expect(isAnagram('rat', 'car')).toBe(false);
  expect(isAnagram('aab', 'abb')).toBe(false);
});
