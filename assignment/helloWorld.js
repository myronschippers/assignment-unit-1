// Code Comment Hi There
console.log('Hi There');

// Variables

const lastName = 'Schippers';
console.log(lastName);
// let
let firstName = 'Myron';
console.log(firstName);

// firstName = '10';
// console.log(firstName);

// Types

// string
// number

// object
// array

// Expressions
console.log(firstName + ' ' + lastName);
const twelve = '12';

const num1 = 4;
const num2 = 6;

console.log(num1 - num2);

// =
// +
// -
// /
// *

// Conditionals

if (num1 > num2) {
  // execute code
  console.log('GREATER');
} else if (num1 == num2) {
  console.log('equal');
} else {
  console.log('NOT MET');
}

// == same value not same type
// 12 == '12' true
// === same value same type
// 12 === '12' false
// != does not equal
// !==
// >
// <
// >=
// <=

// &&
// ||
// !
// flasy value: undefined, null, 0

const cat = 1;
const dog = 20;
const bird = 20;

if (bird > cat && bird < dog) {
  console.log('Value is between');
} else {
  console.log('Not between');
}
