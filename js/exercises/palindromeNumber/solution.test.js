const isPalindrome = require("./solution");

describe("isPalindrome", () => {
  it("should return true if input is 212", () => {
    expect(isPalindrome(212)).toBe(true);
  });

  it("should return false if input is -12", () => {
    expect(isPalindrome(-12)).toBe(false);
  });

  it("should return true if input is 1221", () => {
    expect(isPalindrome(1221)).toBe(true);
  });

  it("should return false if input is 123", () => {
    expect(isPalindrome(123)).toBe(false);
  });
});
