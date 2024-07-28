function flattenArray(array) {
  return array.reduce(function (accumulator, current) {
    console.log(accumulator);
    if (!Array.isArray(current)) {
      return accumulator.concat(current);
    }
    return accumulator.concat(flattenArray(current));
  }, []);
}

let x = flattenArray([2, 3, [4, 'you', [67, 90], [85]], 90]);

console.log(x);
