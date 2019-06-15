const countWords = input => {
  let result = {};
  input = input.split(" ");
  input.forEach(word => {
    if (!result[word.toLowerCase()]) {
      result[word.toLowerCase()] = 1;
    } else result[word.toLowerCase()] += 1;
  });
  let str = "";

  for (let [key, value] of Object.entries(result)) {
    str += `${key}: ${value}, `;
  }
  return str.slice(0, -2);
};

module.exports = countWords;
