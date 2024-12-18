import { test, expect } from 'vitest';
import {
  add,
  subtract,
  mulitply,
  divide,
  palindromeChecker,
  anagramChecker,
} from './challenges';

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

test('divide function that divides two numbers', () => {
  const result = divide(10, 5);
  const expected = 2;
  expect(result).toBe(expected);
});

// test('palindrome function to check if word is palindrome', () => {
//   const result = palindromeChecker('craig');
//   const expected = true;
//   expect(result).toBe(expected);
// });

test('palindrome function to check if word is palindrome', () => {
  const result = palindromeChecker('racecar');
  const expected = true;
  expect(result).toBe(expected);
});

test('palindrome function to check if word is palindrome', () => {
  const result = palindromeChecker('level');
  const expected = true;
  expect(result).toBe(expected);
});

test('anagram function to check if word is an anagram of another word', () => {
  const result = anagramChecker('cat', 'tac');
  const expected = true;
  expect(result).toBe(expected);
});
