function deepEqual(obj1, obj2) {
  if ((obj1 == null || obj2 == null) && obj1 != obj2) {
    return false;
  } else if (obj1 === obj2) return true;
  else if (typeof obj1 == 'object' && typeof obj2 == 'object') {
    let obj1Keys = Object.keys(obj1);
    let obj2Keys = Object.keys(obj2);

    if (obj1Keys.length == obj2Keys.length) {
      for (let item1 of obj1Keys) {
        if (obj2Keys.includes(item1)) {
          // console.log(obj1[item1], obj2[item1]);

          //if the value of obj1[item1] and obj2[item1] are not equal
          if (!deepEqual(obj1[item1], obj2[item1])) {
            return false;
          }
        }
      }
    }
    return true;
  }
  return false;
}

let a = { a: 4, b: 8 };
let b = { a: 8, b: 4 };
let c = Object.assign({}, a);

// console.log(deepEqual(a, b));
// console.log(deepEqual(a, c));
// console.log(deepEqual(null, null));
