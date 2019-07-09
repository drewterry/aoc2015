trans = {
  'AND': '&',
  'OR': '|',
  'NOT': '~',
  'LSHIFT': '<<',
  'RSHIFT': '>>'
}

cache = {};

function uint16 (n) {
  const max = 65536
  return ((n % max) + max ) % max;
}

function parseCommands(input) {
  return input
    .split('\n')
    .map((line) => {
      const parsed = line.match(/([a-z0-9]*)\s*([A-Z]*)\s*([a-z0-9]*) -> ([a-z]*)/);

      return {
        in0: parsed[1],
        in1: parsed[3],
        op: trans[parsed[2]],
        out: parsed[4]
      };
    });
}

function evalCmd(out, commands) {
  if(cache[out]) {
    console.log('C ' + out + ' = ' + cache[out])
    return cache[out];
  } else {
    const cmd = commands.find((cmd) => cmd.out === out)
    let { in0, in1 } = cmd;

    if(isNaN(in0)) {
      in0 = evalCmd(in0, commands)
    }

    if(isNaN(in1)) {
      in1 = evalCmd(in1, commands)
    }

    expr = `${in0}${cmd.op ? cmd.op : ''}${in1}`
    console.log('  ' + cmd.out + ' = ' + expr)
    cache[cmd.out] = uint16(eval(expr));
    return uint16(eval(expr));
  }
}

function part1(input) {
//   input = `123 -> x
// 456 -> y
// x AND y -> h
// x OR y -> e
// x LSHIFT 2 -> f
// y RSHIFT 2 -> g
// NOT x -> d
// NOT y -> i`;

  commands =  parseCommands(input);
  console.log(commands);

  return evalCmd('a', commands);
}

function part2(input) {
  return false;
}

module.exports = {
  part1,
  part2
};