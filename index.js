const fs = require('fs');

let args = process.argv.slice(2);

const dir = `${__dirname}/${args[0]}`;
const solution = require(`${dir}/solution`);
const input = fs.readFileSync(`${dir}/input.txt`, 'utf8');

console.log(`Part 1: ${solution.part1(input)}\nPart 2: ${solution.part2(input)}`);