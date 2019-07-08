function part1Nice(input) {
  const threeVowels = (input.match(/[aeiou]/g) || []).length >= 3;
  const doubleLetter = /(.)\1/.test(input);
  const badStrings = !/(ab)|(cd)|(pq)|(xy)/.test(input)

  return threeVowels && doubleLetter && badStrings
}

function part1(input) {
  return input.split('\n').reduce((count, input) => (part1Nice(input) ? count + 1 : count), 0);
}

function part2Nice(input) {
  const twoPair = /(.{2}).*\1/.test(input)
  const repeating = /(.).\1/.test(input);
  return twoPair && repeating;
}

function part2(input) {
  return input.split('\n').reduce((count, input) => (part2Nice(input) ? count + 1 : count), 0);
}
module.exports = {
  part1: part1,
  part1Nice: part1Nice,
  part2: part2,
  part2Nice: part2Nice
};