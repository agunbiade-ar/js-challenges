let index = 1;

while (index <= 100) {
  if (index % 3 == 0 && index % 5 == 0) {
    console.log(index + ' Fizz Buzz');
  } else if (index % 3 == 0) {
    console.log(index + ' Fizz');
  } else if (index % 5 == 0) {
    console.log(index + ' Buzz');
  } else {
    console.log(index);
  }
  index = index + 1;
}
