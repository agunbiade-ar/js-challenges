function Letters() {
  this.letters = [
    'P',
    'r',
    'o',
    'g',
    'r',
    'a',
    'm',
    'm',
    'i',
    'n',
    'g',
    'I',
    's',
    'F',
    'u',
    'n',
  ];
  this.singleWord = singleWord;
}

function singleWord() {
  return this.letters.join('');
}

let l = new Letters();
console.log(l.singleWord());
