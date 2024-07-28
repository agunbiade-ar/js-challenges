const SCRIPTS = require('./scripts');

//identifies a script by given it a code (number)
function characterScript(code) {
  for (let script of SCRIPTS) {
    if (
      script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })
    )
      return script;
  }
}

//for grouping elements of an array or string
function countBy(items, groupName) {
  let counts = [];
  for (let item of items) {
    let script = groupName(item);
    let known = counts.findIndex((el) => el.script == script);
    if (known == -1) {
      counts.push({ script, count: 1 });
    } else {
      counts[known].count++;
    }
  }
  return counts;
}
// console.log(countBy([1, 2, 3, 4, 5], (n) => n > 2));

function dom_writing_direction() {
  let sampleText = '英国的狗أحبكأحبكأحب"тяв"';
  let scripts = countBy(sampleText, (char) => {
    let script = characterScript(char.codePointAt(0));
    return script ? script : 'none';
  });

  let directions = scripts.reduce(
    (accumulator, current) => {
      if (current.script.direction == 'ltr') {
        accumulator.ltr += current.count;
      } else {
        accumulator.rtl += current.count;
      }
      return accumulator;
    },
    { ltr: 0, rtl: 0 }
  );

  if (directions.ltr > directions.rtl)
    return 'dominant writing direction is left to right';
  else if (directions.ltr < directions.rtl)
    return 'dominant writing direction is right to left';
  else {
    return 'right to left and left to right characters are the same number';
  }
}

console.log(dom_writing_direction());
