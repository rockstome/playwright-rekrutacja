import { test, expect } from '@playwright/test';

// Extract the price from a text and return it as a number.
// parsePrice('$29.99') -> 29.99
// parsePrice('Item total: $49.66') -> 49.66

function parsePrice(text: string): number {
  throw new Error('TODO');
}

test('parsePrice', () => {
  expect(parsePrice('$29.99')).toBe(29.99);
  expect(parsePrice('Item total: $49.66')).toBe(49.66);
  expect(parsePrice('Total: $1200')).toBe(1200);
});
