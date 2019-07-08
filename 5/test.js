const solution = require('./solution');

describe('part1Nice', () => {
  let validList = [
    'ugknbfddgicrmopn',
    'aaa'
  ];

  validList.forEach((input) => {
    test(input, () => {
      expect(solution.part1Nice(input)).toBe(true);
    });
  })

  let invalidList = [
    'jchzalrnumimnmhp',
    'haegwjzuvuyypxyu',
    'dvszwmarrgswjxmb'
  ];

  invalidList.forEach((input) => {
    test(input, () => {
      expect(solution.part1Nice(input)).toBe(false);
    });
  })
});

describe('part2Nice', () => {
  let validList = [
    'qjhvhtzxzqqjkmpb',
    'xxyxx'
  ];

  validList.forEach((input) => {
    test(input, () => {
      expect(solution.part2Nice(input)).toBe(true);
    });
  })

  let invalidList = [
    'uurcxstgmygtbstg',
    'ieodomkazucvgmuy',
  ];

  invalidList.forEach((input) => {
    test(input, () => {
      expect(solution.part2Nice(input)).toBe(false);
    });
  })
});
