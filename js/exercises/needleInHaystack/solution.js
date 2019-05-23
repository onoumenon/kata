const strStr = function(haystack, needle) {
  if (needle === "" || haystack === needle) {
    return 0;
  }
  for (i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      let potentialNeedle = haystack.substring(i, i + needle.length);
      if (potentialNeedle === needle) {
        return i;
      }
    }
  }
  return -1;
};

module.exports = strStr;
