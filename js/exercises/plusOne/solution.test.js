const plusOne = require("./solution");

describe("plusOne", () => {
  it("should return [1] if input is [0]", () => {
    expect(plusOne([0])).toEqual([1]);
  });

  it("should return [1,2,4] if input is [1,2,3]", () => {
    expect(plusOne([1, 2, 3])).toEqual([1, 2, 4]);
  });

  it("checks if plusOne returns [1,3,0] when input is [1,2,9]", () => {
    expect(plusOne([1, 2, 9])).toEqual([1, 3, 0]);
  });

  it("should return [1, 0] if input is [9]", () => {
    expect(plusOne([9])).toEqual([1, 0]);
  });

  it("should be able to handle large number input", () => {
    expect(
      plusOne([1, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9])
    ).toEqual([1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });
});
