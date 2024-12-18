import { test, expect } from 'vitest';
import { add, subtract, mulitply, divide } from './challenges';

test('add function adds two numbers', () => {
  const result = add(1, 2);
  const expected = 3;
  expect(result).toBe(expected);
});

test('subtract function subtracts two numbers', () => {
  const result = subtract(5, 3);
  const expected = 2;
  expect(result).toBe(expected);
});

test('mulitply function mulitplies two numbers', () => {
  const result = mulitply(5, 3);
  const expected = 15;
  expect(result).toBe(expected);
});

test('divide function that divides two numbers', () => {
  const result = divide(10, 5);
  const expected = 2;
  expect(result).toBe(expected);
});
