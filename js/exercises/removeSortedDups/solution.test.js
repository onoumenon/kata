const removeDuplicates = require("./solution");

describe("removeDuplicates", () => {
  it("should return 2 if input is [1,1,2] ", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });
  it("should return 3 is input is [1,1,2,2,2,3,3]", () => {
    expect(removeDuplicates([1, 1, 2, 2, 2, 3, 3])).toBe(3);
  });
  it("should return 4 is input is [1,1,2,3,3,4,4,5,5,5,5]", () => {
    expect(removeDuplicates([1, 1, 2, 3, 3, 4, 4, 5, 5, 5, 5])).toBe(5);
  });
  it('should return 0 if input is ""', () => {
    expect(removeDuplicates("")).toBe(0);
  });
  it('should return error if input is "HI"', () => {
    expect(() => removeDuplicates("HI")).toThrow();
  });
});
