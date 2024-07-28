function loop(value, test, update, body) {
  for (let i = value; test(i); i = update(i)) {
    body(i);
  }
}

loop(
  5,
  (x) => x < 21,
  (y) => y + 1,
  console.log
);
