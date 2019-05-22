var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }
  if (x < 10) {
    return true;
  }
  if (x % 10 === 0) {
    return false;
  }
  var reversedNo = 0;
  while (x > reversedNo) {
    reversedNo = reversedNo * 10 + (x % 10);
    x = Math.trunc(x / 10);
  }
  return reversedNo === x || Math.trunc(reversedNo / 10) === x;
};

module.exports = isPalindrome;
