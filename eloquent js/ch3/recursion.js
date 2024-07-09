function isEven(n) {
  if (n < 1) {
    n = n * -1;
  }
  if (n == 0) {
    console.log('this is an even number');
    return true;
  } else if (n == 1) {
    console.log('this is an odd number');
    return false;
  } else {
    return isEven(n - 2);
  }
}

isEven(-1);
