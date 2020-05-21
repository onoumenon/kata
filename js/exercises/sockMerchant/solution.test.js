const calculatePairsOfSocks = require('./solution');

describe('calculatePairsOfSocks', () => {
  it('should return 2', () => {
    expect(calculatePairsOfSocks('4', [2, 1, 1, 2])).toBe(2);
  });
  it('should return 5', () => {
    expect(
      calculatePairsOfSocks('4', [2, 1, 1, 5, 1, 5, 5, 2, 3, 4, 3, 0, 0])
    ).toBe(2);
  });
});
