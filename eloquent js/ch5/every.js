function every(array, func) {
  for (let element of array) {
    if (!func(element)) return false;
  }
  return true;
}
// console.log(every([6, 4, 8, 2], (el) => el > 2));

//p^q == !(!p v !q)
function everyWithSome(array, func) {
  return !array.some((el) => !func(el));
}

console.log(everyWithSome([4, 6, 8, 1], (el) => el > 10));
