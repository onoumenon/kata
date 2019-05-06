const twoSum = (nums, target) => {
  for (i = 0; i < nums.length; i++) {
    for (j = 0; j < nums.length; j++)
      if (nums[i] + nums[j] === target && j !== i) {
        return [i, j];
      }
  }
  throw new Error("No two sum solution found.");
};

module.exports = twoSum;
