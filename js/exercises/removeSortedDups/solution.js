var removeDuplicates = function(nums) {
  if (!nums.length) {
    return 0;
  }
  for (i = 0; i < nums.length - 1; i++) {
    if (isNaN(nums[i])) {
      throw new Error("input is not a number");
    }
    if (nums[i] === nums[i + 1]) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

module.exports = removeDuplicates;
