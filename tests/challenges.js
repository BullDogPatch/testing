export const add = (a, b) => {
  return a + b;
};

export const subtract = (a, b) => {
  return a - b;
};

export const mulitply = (a, b) => {
  return a * b;
};

export const divide = (a, b) => {
  return a / b;
};

// Stretch
export const palindromeChecker = (word) => {
  return word === word.split('').reverse().join('');
};
