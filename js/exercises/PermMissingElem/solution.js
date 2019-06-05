function solution(A) {
  let maxNo = 1;
  let sum = 0;
  for (num of A) {
    if (num > maxNo) {
      maxNo = num;
    }
    sum += num;
  }
  if ((maxNo * (maxNo + 1)) / 2 - sum === 0) {
    return maxNo + 1;
  }
  return (maxNo * (maxNo + 1)) / 2 - sum;
}

module.exports = solution;
