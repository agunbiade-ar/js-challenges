const specialCharacters = [
  "\\'", // Single quote
  '\\"', // Double quote
  '\\\\', // Backslash
  '\\n', // Newline
  '\\r', // Carriage return
  '\\t', // Tab
  '\\b', // Backspace
  '\\f', // Form feed
  '\\v', // Vertical tab
  '@', // At symbol
  '#', // Hash symbol
  '$', // Dollar sign
  '%', // Percent sign
  '^', // Caret
  '&', // Ampersand
  '*', // Asterisk
  '(', // Left parenthesis
  ')', // Right parenthesis
  '-', // Hyphen
  '_', // Underscore
  '=', // Equals sign
  '+', // Plus sign
  '[', // Left square bracket
  ']', // Right square bracket
  '{', // Left curly brace
  '}', // Right curly brace
  '|', // Vertical bar
  '\\', // Backslash
  ':', // Colon
  ';', // Semicolon
  "'", // Single quote
  '"', // Double quote
  '<', // Less than
  '>', // Greater than
  ',', // Comma
  '.', // Period
  '?', // Question mark
  '/', // Forward slash
];

let textInput = document.getElementById('text-input');
let checkBtn = document.getElementById('check-btn');
let result = document.getElementById('result');

function isPalindrome(text_) {
  let textArray = [];
  let text = text_
    .toLowerCase()
    .trim()
    .split('')
    .filter((el) => el !== ' ');

  text.forEach((item) => {
    if (!specialCharacters.includes(item)) {
      textArray.push(item);
    }
  });
  textArray = textArray.join('');

  for (let i = 0; i < textArray.length / 2; i++) {
    if (textArray[i] !== textArray[textArray.length - i - 1]) return false;
  }
  return true;
}

checkBtn.addEventListener('click', () => {
  let input = textInput.value;
  textInput.value = '';
  if (input.trim() === '') {
    alert('Please input a value');
  }
  if (isPalindrome(input)) {
    result.innerText = input + ' is a palindrome';
  } else {
    result.innerText = input + ' is not a palindrome';
  }
});
