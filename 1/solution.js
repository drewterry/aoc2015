const fs = require('fs')
const input = [...fs.readFileSync(__dirname + '/input.txt', 'utf8')];

const up = input.filter(x => x==='(').length;
const down = input.filter(x => x===')').length;

console.log(up-down);

var basementPos;
input.reduce((currentPos, currentDir, i) => {
  currentPos += currentDir === '(' ? 1 : -1;
  if(!basementPos && currentPos < 0) { basementPos = i + 1; }
  return currentPos
}, 0)
console.log(basementPos);