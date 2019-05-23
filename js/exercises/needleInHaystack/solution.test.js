const strStr = require("./solution");

describe("strStr", () => {
  it("should return 0 for empty string given as needle", () => {
    expect(strStr("hello", "")).toBe(0);
  });
  it("should return 2 for input 'hello' and 'll'", () => {
    expect(strStr("hello", "ll")).toBe(2);
  });
  it("should return -1 if needle can't be found in haystack", () => {
    expect(strStr("aaaa", "aaab")).toBe(-1);
  });
});
