function parseCommands(input) {
  return input.split('\n').map((line) => {
    [begin, end] = line.match(/[0-9]{1,3},[0-9]{1,3}/g).map((coord) => coord.split(','));

    return {
      action: line.match(/(.*?)(?=([0-9,]))/)[0].trim(),
      beginX: +begin[0],
      beginY: +begin[1],
      endX: +end[0],
      endY: +end[1]
    };
  });
}

function part1(input) {
  const lights = new Array(1000).fill().map(() => new Array(1000).fill(false));

  parseCommands(input).forEach((command) => {
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

  return count;
}

function part2(input) {
  const lights = new Array(1000).fill().map(() => new Array(1000).fill(0));

  parseCommands(input).forEach((command) => {
    for(i=command.beginX; i <= command.endX; i++) {
      for(j=command.beginY; j <= command.endY; j++) {
        switch(command.action) {
          case 'turn on':
            lights[i][j] = lights[i][j] + 1;
            break;
          case 'toggle':
            lights[i][j] = lights[i][j] + 2;
            break;
          case 'turn off':
            lights[i][j] = lights[i][j] - 1;
            break;
        }
        lights[i][j] = Math.max(lights[i][j], 0);
      }
    }
  })
  
  const count = lights.reduce((count, row) => {
    return count + row.reduce((count, light) => {
      return count + light;
    }, 0)
  }, 0)

  return count;
}

module.exports = {
  part1: part1,
  part2: part2,
};