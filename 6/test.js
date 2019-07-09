const solution = require('./solution');

describe('part1', () => {

  test('turn on 0,0 through 999,999', () => {
    input = `turn on 0,0 through 999,999`;

    expect(solution.part1(input)).toBe(1000000);
  });

  test('toggle 0,0 through 999,0', () => {
    input = `turn on 0,0 through 999,999
    toggle 0,0 through 999,0`;

    expect(solution.part1(input)).toBe(999000);
  });

  test('turn off 499,499 through 500,500', () => {
    input = `turn on 0,0 through 999,999
    toggle 0,0 through 999,0
    turn off 499,499 through 500,500`;
    
    expect(solution.part1(input)).toBe(998996);
  });

  test('toggle 0,999 through 999,999', () => {
    input = `turn on 0,0 through 999,999
    toggle 0,0 through 999,0
    toggle 0,999 through 999,999
    turn off 499,499 through 500,500`;

    expect(solution.part1(input)).toBe(997996);
  });
});

describe('part2', () => {

  test('turn on 0,0 through 0,0', () => {
    input = `turn on 0,0 through 0,0`;

    expect(solution.part2(input)).toBe(1);
  });

  test('toggle 0,0 through 999,999', () => {
    input = `toggle 0,0 through 999,999`;

    expect(solution.part2(input)).toBe(2000000);
  });
});

