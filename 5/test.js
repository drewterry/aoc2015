const solution = require('./solution');

describe('part1', () => {
  let validList = [
    'ugknbfddgicrmopn',
    'aaa'
  ];

  validList.forEach((input) => {
    test(input, () => {
      expect(solution.part1(input)).toBe(true);
    });
  })

  let invalidList = [
    'jchzalrnumimnmhp',
    'haegwjzuvuyypxyu',
    'dvszwmarrgswjxmb'
  ];

  invalidList.forEach((input) => {
    test(input, () => {
      expect(solution.part1(input)).toBe(false);
    });
  })
});

describe('part2', () => {
  let validList = [
    'qjhvhtzxzqqjkmpb',
    'xxyxx'
  ];

  validList.forEach((input) => {
    test(input, () => {
      expect(solution.part2(input)).toBe(true);
    });
  })

  let invalidList = [
    'uurcxstgmygtbstg',
    'ieodomkazucvgmuy',
  ];

  invalidList.forEach((input) => {
    test(input, () => {
      expect(solution.part2(input)).toBe(false);
    });
  })
});
