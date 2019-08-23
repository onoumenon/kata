const addBinary = require("./solution");

describe("addBinary", () => {
  it('should return 100 when input is 11 and 1', () => {
    expect(addBinary('11', '1')).toBe('100')
  });
});
