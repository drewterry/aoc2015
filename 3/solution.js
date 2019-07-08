const fs = require('fs');
const input = fs.readFileSync(__dirname + '/input.txt', 'utf8');
// const input = '^>v<^';

function countHouses(input) {
  const coords = { '0,0': 1 };
  
  input.reduce((pos, dir) => {
    switch (dir) {
      case '^':
        pos.x += 1;
        break;
      case 'v':
        pos.x -= 1;
        break;
      case '>':
        pos.y += 1;
        break;
      case '<':
        pos.y -= 1;
        break;
    }
    
    const posString = `${pos.x},${pos.y}`;
    coords[posString] = (coords[posString] || 0) + 1;
    return pos;
  }, { x:0, y:0 })
  
  return coords;
}


const yearOne = countHouses(input.split(''));
console.log(Object.keys(yearOne).length);

const {santa, robot} = input.split('').reduce((result, value, index, array) => {
  if (index % 2 === 0) {
    result.santa.push(array[index]);
    result.robot.push(array[index + 1]);
  }
  return result;
}, {santa: [], robot:[]});

console.log(Object.keys({...countHouses(santa), ...countHouses(robot)}).length);