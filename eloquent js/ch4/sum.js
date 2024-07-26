function range(start, end, step = 1) {
  let arr = [];
  if (step > 0) {
    for (let index = start; index < end + step; index += step) {
      arr.push(index);
    }
  } else {
    for (let index = start; index > end + step; index += step) {
      arr.push(index);
    }
  }
  return arr;
}

function sum(array) {
  let total = 1;
  array.forEach((element) => {
    total += element;
  });
  return total;
}

// console.log(range(5, 2, -1));
// console.log(sum(range(5, 2, -1)));
// console.log(sum(range(2, 5, 1)));
