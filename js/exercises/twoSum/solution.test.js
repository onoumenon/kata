const twoSum = require("./solution");

describe("Two Sum function", () => {
  it("should return [0,2] when [4,5,1,2] and 5 is given", () => {
    const nums = [4, 5, 1, 2];
    const target = 5;
    expect(twoSum(nums, target)).toEqual([0, 2]);
  });
  it("should return [0,3] when [4,5,3,2] and 6 is given", () => {
    const nums = [4, 5, 3, 2];
    const target = 6;
    expect(twoSum(nums, target)).toEqual([0, 3]);
  });
  it("should return an error when no solution is found", () => {
    const nums = [4, 5, 3, 2];
    const target = 16;
    expect(() => {
      twoSum(nums, target);
    }).toThrow();
  });
});
