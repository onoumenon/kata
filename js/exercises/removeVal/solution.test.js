const removeElement = require("./solution");

describe("removeElement", () => {
  it("should return 2 if input is [3,2,2,3] and 3", () => {
    expect(removeElement([3, 2, 2, 3], 3)).toBe(2);
  });
  it("should return 5 if input is [0,1,2,2,3,0,4,2] and 2", () => {
    expect(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2)).toBe(5);
  });
});
