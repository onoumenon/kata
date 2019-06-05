const frogJump = require("./solution");

describe("frogJump", () => {
  it("should return 3 if input is 10, 85, 30", () => {
    expect(frogJump(10, 85, 30)).toBe(3);
  });
  it("should return 0 if input is 0, 0,1", () => {
    expect(frogJump(0, 0, 1)).toBe(0);
  });
  it("should return NaN if input is invalid", () => {
    expect(frogJump(0, 0, undefined)).toBe(NaN);
  });
  it("should return 33333333 even if inputs have max integer", () => {
    expect(frogJump(10, 1000000000, 30)).toBe(33333333);
  });
});
