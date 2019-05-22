const isValidParen = require("./solution");

describe("isValidParen", () => {
  it("should return true if empty string is input", () => {
    expect(isValidParen("")).toBe(true);
  });
  it("should return false for '{[}]'", () => {
    expect(isValidParen("{[}]")).toBe(false);
  });
  it("should return true for '()'", () => {
    expect(isValidParen("()")).toBe(true);
  });
  it("should return false for '[[a]]'", () => {
    expect(isValidParen("[[a]]")).toBe(false);
  });
  it("should return true for '{()[]{}}'", () => {
    expect(isValidParen("{()[]{}}")).toBe(true);
  });
});
