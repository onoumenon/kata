const longestPrefix = require("./solution");

describe("longestPrefix", () => {
  it('should return "" if string is no common prefix', () => {
    expect(longestPrefix(["dog", "racecar", "car"])).toBe("");
  });
  it('should return "fl" if common prefixes is "fl"', () => {
    expect(longestPrefix(["flower", "flow", "flight"])).toBe("fl");
  });
  it('should return "a" if input is "aa"', () => {
    expect(longestPrefix("aa")).toBe("a");
  });
  it('should return "a" if ["aa", "a"] is the input', () => {
    expect(longestPrefix(["aa", "a"])).toBe("a");
  });
  it('should return "" if input is []', () => {
    expect(longestPrefix([])).toBe("");
  });
});
