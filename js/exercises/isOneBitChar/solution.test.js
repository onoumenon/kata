const isOneBitChar = require("./solution");

describe("isOneBitChar", () => {
  it("should return true if input is [1,0,0]", () => {
    expect(isOneBitChar([1, 0, 0])).toBe(true);
  });

  it("should return false if input is [1,1,1,0]", () => {
    expect(isOneBitChar([1, 1, 1, 0])).toBe(false);
  });

  it("should return false if input is [1,0,1,0]", () => {
    expect(isOneBitChar([1, 0, 1, 0])).toBe(false);
  });

  it("should return false if input is [0,0,0,1,0]", () => {
    expect(isOneBitChar([0, 0, 0, 1, 0])).toBe(false);
  });

  it("should return false if input is [1,0,1,1,0]", () => {
    expect(isOneBitChar([1, 0, 1, 1, 0])).toBe(true);
  });

  it("should return true if input is [0,1,1,0]", () => {
    expect(isOneBitChar([0, 1, 1, 0])).toBe(true);
  });

  it("should return false if input is [0,1,0,0,1,0]", () => {
    expect(isOneBitChar([0, 1, 0, 0, 1, 0])).toBe(false);
  });
});
