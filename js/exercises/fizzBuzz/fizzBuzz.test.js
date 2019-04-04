const fizzBuzz = require("./fizzBuzz");

describe("FizzBuzz", () => {
  describe("Not multiple of 3 or 5", () => {
    it("returns 2 when 2 is given", () => {
      expect(fizzBuzz(2)).toBe(2);
    });
    it("returns 4 when 4 is given", () => {
      expect(fizzBuzz(4)).toBe(4);
    });
  });

  describe("multiples of 3", () => {
    it("returns fizz when 3 is given", () => {
      expect(fizzBuzz(3)).toBe("fizz");
    });
    it("returns fizz when 6 is given", () => {
      expect(fizzBuzz(6)).toBe("fizz");
    });
  });

  describe("multiples of 5", () => {
    it("returns buzz when 5 is given", () => {
      expect(fizzBuzz(5)).toBe("buzz");
    });
    it("returns buzz when 10 is given", () => {
      expect(fizzBuzz(10)).toBe("buzz");
    });
    it("returns buzz when 15 is given", () => {
      expect(fizzBuzz(15)).toBe("fizzbuzz");
    });
  });

  describe("when out of range", () => {
    it("returns error message when 0 is given", () => {
      expect(fizzBuzz(0)).toBe("HAHA, it starts from 1!");
    });
    it("returns error message -1 is given", () => {
      expect(fizzBuzz(-1)).toBe("HAHA, it starts from 1!");
    });
  });
});
