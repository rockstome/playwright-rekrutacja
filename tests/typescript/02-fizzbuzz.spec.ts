import { test, expect } from '@playwright/test';

// Return numbers from 1 to n as strings, but:
// multiples of 3 -> 'Fizz', multiples of 5 -> 'Buzz', multiples of both -> 'FizzBuzz'.
// fizzBuzz(5) -> ['1', '2', 'Fizz', '4', 'Buzz']

function fizzBuzz(n: number): string[] {
  throw new Error('TODO');
}

test('fizzBuzz', () => {
  expect(fizzBuzz(5)).toEqual(['1', '2', 'Fizz', '4', 'Buzz']);
  expect(fizzBuzz(15)[14]).toBe('FizzBuzz');
  expect(fizzBuzz(0)).toEqual([]);
});
