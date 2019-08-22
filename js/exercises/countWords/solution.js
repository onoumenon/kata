const countWords = input => {
  return input.split(" ").reduce((acc, cur) => {
    const lowercasedWord = cur.toLowerCase();
    acc[lowercasedWord] ? acc[lowercasedWord]++ : acc[lowercasedWord] = 1;
    return acc;
  }, {});
};

module.exports = countWords;
