const multiples3And5 = num => {
  let sum = 0;
  for (var i = 1; i < num; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }
  return sum;
};

module.exports = multiples3And5;
