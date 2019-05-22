const isValidParen = function(s) {
  if (s === "") {
    return true;
  }
  const regex = /[^{*|\[*|\(*|}*|\]*|\)*]/g;
  if (regex.test(s)) {
    return false;
  }
  const brackets = { "}": "{", "]": "[", ")": "(" };
  let stack = [];
  for (char of s) {
    if ((char === "{") | (char === "[") | (char === "(")) {
      stack.push(char);
    } else {
      if (brackets[char] === stack[stack.length - 1]) {
        stack.pop(char);
      } else return false;
    }
  }
  return stack.length === 0 ? true : false;
};

module.exports = isValidParen;
