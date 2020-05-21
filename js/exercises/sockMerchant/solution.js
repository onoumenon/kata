const calculatePairsOfSocks = (n, ar) => {
  const sortedArr = ar.sort();
  let pairs = 0;
  let index = 0;
  while (index < n - 1) {
    if (sortedArr[index] === sortedArr[index + 1]) {
      pairs += 1;
      index += 1;
    }
    index += 1;
  }
  return pairs;
};

module.exports = calculatePairsOfSocks;
