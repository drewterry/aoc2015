const fs = require('fs');
const crypto = require('crypto')
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');
// const input = 'abcdef';

let leadingZeroes = 5;
let leadingString = new Array(leadingZeroes + 1).join('0');
let i = 0;
let hash;

do {
  hash = crypto.createHash('md5').update(input + i).digest("hex")
  i++;
} while (hash.slice(0, leadingZeroes) !== leadingString)

console.log(i - 1);
