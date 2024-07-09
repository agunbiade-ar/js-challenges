const words = ['kyle', 'walker', 'Anakin', 'Rashford', 'Daniel', 'Olmo'];

let start = 0;
let end = words.length;
for (let index = start; index < end; index++) {
  console.log(index, words[index]);
}

console.log('\n');

for (let index = end - 1; index >= start; index--) {
  console.log(index, words[index]);
}
