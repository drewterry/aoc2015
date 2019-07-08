// const ndarray = require('ndarray');
// const fs = require('fs')

function part1(input) {
  const lights = new Array(1000).fill().map(() => new Array(1000).fill(false));

  const commands = input.split('\n').map((line) => {
    [begin, end] = line.match(/[0-9]{1,3},[0-9]{1,3}/g).map((coord) => coord.split(','));

    return {
      action: line.match(/(.*?)(?=([0-9,]))/)[0].trim(),
      beginX: begin[0],
      beginY: begin[1],
      endX: end[0],
      endY: end[1]
    };
  })

  commands.forEach((command) => {
    for(i=command.beginX; i <= command.endX; i++) {
      for(j=command.beginY; j <= command.endY; j++) {
        switch(command.action) {
          case 'turn on':
            lights[i][j] = true;
            break;
          case 'toggle':
            lights[i][j] = !lights[i][j];
            break;
          case 'turn off':
            lights[i][j] = false;
            break;
        }
      }
    }
  })
  
  const count = lights.reduce((count, row) => {
    return count + row.reduce((count, light) => {
      return light ? count + 1 : count;
    }, 0)
  }, 0)

  // const colors = lights.reduce((res, row) => res.concat(row.map(light => light ? 255 : 0)), []);
  // const lightsNd = ndarray(colors, [1000, 1000]);
  // require("save-pixels")(lightsNd, 'png').pipe(fs.createWriteStream("myOutput.png"))

  return count;
}

function part2(input) {
  return false
}

module.exports = {
  part1: part1,
  part2: part2,
};