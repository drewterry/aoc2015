const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n');

function part1(input) {
  const threeVowels = (input.match(/[aeiou]/g) || []).length >= 3;
  const doubleLetter = /(.)\1/.test(input);
  const badStrings = !/(ab)|(cd)|(pq)|(xy)/.test(input)

  return threeVowels && doubleLetter && badStrings
}

console.log(input.reduce((count, input) => (part1(input) ? count + 1 : count), 0));

function part2(input) {
  const twoPair = /(.{2}).*\1/.test(input)
  const repeating = /(.).\1/.test(input);
  return twoPair && repeating;
}

console.log(input.reduce((count, input) => (part2(input) ? count + 1 : count), 0));

module.exports = {
  part1: part1,
  part2: part2 
};