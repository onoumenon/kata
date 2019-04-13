const directionsReduction = arr => {
  const opposites = {
    North: "South",
    South: "North",
    East: "West",
    West: "East"
  };

  const results = arr.reduce((dirs, dir) => {
    if (dirs[dirs.length - 1] === opposites[dir]) {
      dirs.pop();
    } else {
      dirs.push(dir);
    }
    return dirs;
  }, []);

  return results;
};

module.exports = directionsReduction;
