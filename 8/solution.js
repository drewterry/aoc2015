const fs = require('fs');

function part1(input) {

  // input = fs.readFileSync(`${__dirname}/testInput.txt`, 'utf8');

  code = input
    .replace(/\n/g, '')
    .length
    
  memory = input
    .replace(/\\x[a-fA-F0-9]{2}|\\"|\\\\/g,'.')
    .replace(/"|\n/g, '')
    .length
    
  return code - memory;
}

function part2(input) {
  // input = fs.readFileSync(`${__dirname}/testInput.txt`, 'utf8');

  code = input
    .replace(/\n/g, '')
    
  encoded = input
    .replace(/\\/g,'\\\\')
    .replace(/"/g,'\\"')
    .split('\n')
    .map(x => `"${x}"`)
    .join('')
    
    // console.log(code, code.length)
    // console.log(encoded, encoded.length)
    
  return encoded.length - code.length;
}

module.exports = {
  part1,
  part2
};