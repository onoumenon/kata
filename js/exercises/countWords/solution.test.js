const countWords = require("./solution");

describe("countWords", () => {
  it('should return "she: 1" if input is "She"', () => {
    expect(countWords("She")).toEqual("she: 1");
  });
  it('should return "she: 1, sells: 1" if input is "She sells"', () => {
    expect(countWords("She sells")).toEqual("she: 1, sells: 1");
  });
  it('should return {she: 1, sells: 2} if input is "She sells sells"', () => {
    expect(countWords("She sells sells")).toEqual("she: 1, sells: 2");
  });
  it('should return {she: 1, sells: 1, sea: 2, shells: 1, by: 1, the: 1, shore: 1 } if input is "She sells sea shells by the Sea shore"', () => {
    expect(countWords("She sells sea shells by the Sea shore")).toEqual(
      "she: 1, sells: 1, sea: 2, shells: 1, by: 1, the: 1, shore: 1"
    );
  });
});
