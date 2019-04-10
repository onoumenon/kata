const findOddInts = arr => {
  return arr.reduce((a, b) => a ^ b);
};

module.exports = findOddInts;
