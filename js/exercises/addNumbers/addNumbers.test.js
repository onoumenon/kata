const addNumbers = require("./addNumbers");

describe("addNumbers", () => {
  it("adds 2 to 3 and returns 5", () => {
    expect(addNumbers(2, 3)).toBe(5);
  });
  it("adds 5 to 3 and returns 8", () => {
    expect(addNumbers(5, 3)).toBe(8);
  });
});
