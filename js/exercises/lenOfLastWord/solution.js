var lengthOfLastWord = function(s) {
  const words = s.trim().split(" ");
  const last = words[words.length - 1];
  return last.length;
};
