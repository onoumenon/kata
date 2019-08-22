const flatMap = (callback, arr) => {
  const mappedArr = arr.reduce((acc, cur) => acc.concat(callback(cur)), []);
  return mappedArr;
};

module.exports = flatMap;