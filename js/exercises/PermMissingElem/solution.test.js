const PermMissingElem = require("./solution");

describe("PermMissingElem", () => {
  it("should return 4 if given [2,3,1,5]", () => {
    expect(PermMissingElem([2, 3, 1, 5])).toBe(4);
  });
  it("should return 0 if given [1]", () => {
    expect(PermMissingElem([1])).toBe(2);
  });
  it("should return 1 if given [2,3]", () => {
    expect(PermMissingElem([2, 3])).toBe(1);
  });
  it("should return 1 if given []", () => {
    expect(PermMissingElem([])).toBe(1);
  });
});
