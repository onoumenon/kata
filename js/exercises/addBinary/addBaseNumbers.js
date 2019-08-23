const padZeros = (x, max) => {
  let result = x;
  while (result.length < max) {
    result = "0" + result;
  }
  return result;
}

const addBaseNumbers = function(a, b, base) {
  let result = "";
  let carry = 0;
  const max = Math.max(a.length,b.length);

  const paddedA = padZeros(a, max);
  const paddedB = padZeros(b, max);

  for (let i = max-1 ; i >= 0 ; i -- ) {
    let cur = parseInt(paddedA[i], base) + parseInt(paddedB[i], base) + carry;
    carry = Math.floor(cur / base);
    cur %= base;
    result = cur.toString(base) + result;
  }

  if (carry) {
    result = carry + result;
  }

  return result;
};


module.exports = addBaseNumbers