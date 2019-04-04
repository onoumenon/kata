const fizzBuzz = num => {
  if (num < 1) {
    return "HAHA, it starts from 1!";
  }
  if (num % 3 === 0 && num % 5 === 0) {
    return "fizzbuzz";
  }
  if (num % 3 === 0) {
    return "fizz";
  }
  if (num % 5 === 0) {
    return "buzz";
  }
  return num;
};

module.exports = fizzBuzz;
