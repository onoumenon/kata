const findOddInts = require("./findOddInts");

describe("findOddInts", () => {
  it("returns 2 when [2, 1, 1] is given", () => {
    const arr = [2, 1, 1];
    expect(findOddInts(arr)).toBe(2);
  });
  it("returns -3 when [-3, -3, 1, 1,-3] is given", () => {
    const arr = [-3, -3, -3, 1, 1];
    expect(findOddInts(arr)).toBe(-3);
  });
});
