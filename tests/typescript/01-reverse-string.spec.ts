import { test, expect } from '@playwright/test';

// Return the string reversed.
// reverse('abc') -> 'cba'

function reverse(text: string): string {
  throw new Error('TODO');
}

test('reverse', () => {
  expect(reverse('abc')).toBe('cba');
  expect(reverse('Playwright')).toBe('thgirwyalP');
  expect(reverse('')).toBe('');
});
