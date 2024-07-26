function reverseArray(array) {
  let innerArray = [];
  for (let index = array.length - 1; index >= 0; index -= 1) {
    innerArray.push(array[index]);
  }
  return innerArray;
}

// console.log(reverseArray([2, 3, 4, 5]));

function reverseArrayInPlace(array) {
  let temp;
  for (let index = 0; index < Math.floor(array.length / 2); index++) {
    temp = array[index];
    array[index] = array[array.length - 1 - index];
    array[array.length - 1 - index] = temp;
  }
  return array;
}

console.log(reverseArrayInPlace([3, 4, 5, 6]));
