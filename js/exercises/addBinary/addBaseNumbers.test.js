const addBaseNumbers = require("./addBaseNumbers");

describe("addBaseNumbers", () => {
  it('should return 100 when input is 11 and 1 with base 2', () => {
    expect(addBaseNumbers('11', '1', 2)).toBe('100')
  });
  it('should return 1e when input is f and f with base 16', () => {
    expect(addBaseNumbers('f', 'f', 16 )).toBe('1e')
  });
});
