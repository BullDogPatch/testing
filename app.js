const anagramChecker = (word1, word2) => {
  console.log(word1.split('').sort().join(''));
  console.log(word2.split('').sort().join(''));

  return word1.split('').sort().join('') === word2.split('').sort().join('');
};

console.log(anagramChecker('cat', 'tac'));

const palindromeChecker = (word) => {
  const sanitizedString = word.split('').reverse().join('');
  console.log(word);
  console.log(sanitizedString);
  return word === word.split('').reverse().join('');
};

console.log(palindromeChecker('racecar'));
console.log(palindromeChecker('nurses run'));
