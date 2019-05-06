// One-pass Hash table | O(n) Time Complexity O(n) Space Complexity

const twoSum = (nums, target) => {
  let numsMap = new Map();
  for (i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (numsMap.has(complement)) {
      return [numsMap.get(complement), i];
    }
    numsMap.set(nums[i], i);
  }
  throw new Error("No two sum solution found.");
};

module.exports = twoSum;
