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
});
