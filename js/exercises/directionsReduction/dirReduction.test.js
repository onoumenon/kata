const dirReduction = require("./dirReduction");

describe("directionsReduction", () => {
  it("returns ['North'] if ['North', 'South', 'East', 'West', 'North'] is given", () => {
    const directions = ["North", "South", "East", "West", "North"];
    expect(dirReduction(directions)).toEqual(["North"]);
  });
  it("returns ['North', 'West', 'South', 'East'] if ['North', 'West', 'South', 'East'] is given", () => {
    const directions = ["North", "West", "South", "East"];
    expect(dirReduction(directions)).toEqual([
      "North",
      "West",
      "South",
      "East"
    ]);
  });
});
