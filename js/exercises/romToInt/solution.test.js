const romanToInt = require("./solution");

describe("romanToInt", () => {
  it('should return 3 if input is "III"', () => {
    expect(romanToInt("III")).toBe(3);
  });
  it('should return 4 if input is "IV"', () => {
    expect(romanToInt("IV")).toBe(4);
  });
  it('should return 0 if input is ""', () => {
    expect(romanToInt("")).toBe(0);
  });
  it('should return 0 if input is "ABC"', () => {
    expect(romanToInt("ABC")).toBe("Input must be a Roman Numeral");
  });
});
