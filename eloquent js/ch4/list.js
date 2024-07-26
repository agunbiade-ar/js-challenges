function arrayToList(array) {
  let list = {};
  let index = 0;
  if (index == array.length - 1) {
    return { ...list, value: array[index], rest: null };
  } else {
    return {
      ...list,
      value: array[index],
      rest: arrayToList(array.slice(index + 1)),
    };
  }
}
// console.log(arrayToList([1, 2, 3, 6]));
let sampleList = arrayToList([1, 2, 3, 6]);

function listToArray(list) {
  let array = [];

  while (list) {
    array.push(list.value);
    list = list.rest;
  }
  return array;
}
// console.log(listToArray(sampleList));

function prepend(element, list) {
  return { value: element, rest: { ...list } };
}
// console.log(prepend(8, sampleList));

function nth(list, index) {
  if (index == 0) {
    return list.value;
  } else if (list.rest == null) {
    return 'no such value exists in the list';
  } else {
    index -= 1;
    return nth(list.rest, index);
  }
}
// console.log(nth(sampleList, 10));
