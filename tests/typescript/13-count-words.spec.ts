import { test, expect } from '@playwright/test';

// Count how many times each word appears in the text. Ignore letter case.
// countWords('the cat and The dog') -> { the: 2, cat: 1, and: 1, dog: 1 }

function countWords(text: string): Record<string, number> {
  throw new Error('TODO');
}

test('countWords', () => {
  expect(countWords('the cat and The dog')).toEqual({ the: 2, cat: 1, and: 1, dog: 1 });
  expect(countWords('test')).toEqual({ test: 1 });
  expect(countWords('')).toEqual({});
});
