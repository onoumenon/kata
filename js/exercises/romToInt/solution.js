const romanToInt = function(s) {
  if (!s) {
    return 0;
  }
  const romToIntMap = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
  };
  let res = romToIntMap[s[s.length - 1]];
  for (i = s.length - 1; i > 0; i--) {
    let curr = romToIntMap[s[i]];
    let prev = romToIntMap[s[i - 1]];
    if (prev < curr) {
      res -= prev;
    } else {
      res += prev;
    }
  }
  if (isNaN(res)) {
    return "Input must be a Roman Numeral";
  } else {
    return res;
  }
};

module.exports = romanToInt;
