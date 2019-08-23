const padZeros = (x, max) => {
  let result = x;
  while (result.length < max) {
    result = "0" + result;
  }
  return result;
}

const addBinary = function(a, b) {
  let result = "";
  let carry = 0;
  const max = Math.max(a.length,b.length);

  const paddedA = padZeros(a, max);
  const paddedB = padZeros(b, max);

  for (let i = max-1 ; i >= 0 ; i -- ) {
    let cur = parseInt(paddedA[i]) + parseInt(paddedB[i]) + carry;
    if (cur > 1) {
      carry = 1;
      cur %= 2;
    }
    else {
      carry = 0;
    }
    result = cur + result;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
};


module.exports = addBinary