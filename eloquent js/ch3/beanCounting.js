let text = 'Hello there, my name is Bello Suleiman Bashir';

function countBs(text) {
  let countBs = 0;
  for (let char of text) {
    if (char == 'B') {
      countBs += 1;
    }
  }
  return countBs;
}

console.log(countBs(text));

function countChar(text, char) {
  let countChar = 0;
  for (let c of text) {
    if (char == c) {
      countChar += 1;
    }
  }
  return countChar;
}

console.log(countChar(text, 'a'));
