const palindromes = function (word) {
  const processedWord = word.toLowerCase().replace(/[^a-z]/g, '');
  const reversedWord = processedWord.split('').reverse().join('');
  return processedWord == reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
