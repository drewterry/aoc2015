const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8').split('\n');
// const input = ['2x3x4', '1x1x10', '4x3x2']

function calcArea(l, w, h) {
  const sides = [l*w, w*h, h*l];
  return sides.reduce((total, side) => total + 2 * side, 0) + Math.min(...sides);
}

function calcRibbon(l, w, h) {
  const sides = [l, w, h].sort((a,b) => a-b);
  return l*w*h + 2*sides[0] + 2*sides[1];
}

const paper = input.reduce((total, dim, i) => {
  return total + calcArea(...dim.split('x'))
}, 0)

console.log(paper);

const ribbon = input.reduce((total, dim, i) => {
  return total + calcRibbon(...dim.split('x'))
}, 0)

console.log(ribbon);