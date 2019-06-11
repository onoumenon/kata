const maxSubArray =  (nums) => {
    let maxSum = nums[0]
    let currSum = nums[0]
    for (i = 1; i < nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i])
        maxSum = Math.max(currSum, maxSum)
    }
    return maxSum
}

module.exports = maxSubArray