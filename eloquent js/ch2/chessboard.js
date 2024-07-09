let size = 8;
let initialText = '';
let text = '';

for (let i = 0; i < size; i++) {
  if (i % 2 == 0) text = ' #';
  else {
    text = '# ';
  }
  for (let j = 0; j < size / 2; j++) {
    initialText += text;
    if (j == size / 2 - 1) {
      console.log(initialText);
    }
  }
  initialText = '';
}
