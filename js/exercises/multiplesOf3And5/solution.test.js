const multiples3And5 = require("./solution");

describe("multiples3And5", () => {
  it("returns 23 when 10 is given", () => {
    expect(multiples3And5(10)).toBe(23);
  });

  it("returns 3 when 5 is given", () => {
    expect(multiples3And5(5)).toBe(3);
  });

  it("returns 98 when 21 is given", () => {
    expect(multiples3And5(21)).toBe(98);
  });

  it("returns 0 when 3 is given", () => {
    expect(multiples3And5(3)).toBe(0);
  });
});
