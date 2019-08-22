const countWords = require("./solution");

describe("countWords", () => {
  it('should return {"she": 1} if input is "She"', () => {
    expect(countWords("She")).toEqual({"she": 1});
  });
  it('should return {"sells": 1, "she": 1} if input is "She sells"', () => {
    expect(countWords("She sells")).toEqual({"sells": 1, "she": 1});
  });
  it('should return {"sells": 2, "she": 1} if input is "She sells sells"', () => {
    expect(countWords("She sells sells")).toEqual({"sells": 2, "she": 1});
  });
  it('should return {"by": 1, "sea": 2, "sells": 1, "she": 1, "shells": 1, "shore": 1, "the": 1} if input is "She sells sea shells by the Sea shore"', () => {
    expect(countWords("She sells sea shells by the Sea shore")).toEqual(
      {"by": 1, "sea": 2, "sells": 1, "she": 1, "shells": 1, "shore": 1, "the": 1}
    );
  });
});
