'use strict';

// 2.1 Hello, world!
alert('Hello, world!');

// 2.2 Code structure
console.log('Statements end with semicolon; whitespace doesn’t matter.');

// 2.3 Modern mode
'use strict';

// 2.4 Variables
let name = 'Yerassyl';
const BIRTH_YEAR = 2006;
console.log(name, BIRTH_YEAR);

// 2.5 Data types
let isStudent = true; // boolean
let age = 17; // number
let lastName = null; // null
let address; // undefined
let symbolExample = Symbol('id'); // symbol
let person = { name: 'Yerassyl' }; // object

// 2.6 Interaction
// alert('Hello!');
// let input = prompt('Enter your age:');
// let confirmation = confirm('Are you sure?');

// 2.7 Type Conversions
console.log(String(123)); // "123"
console.log(Number('456')); // 456
console.log(Boolean(0)); // false

// 2.8 Basic operators
let x = 10 + 5;
console.log(x, 10 - 5, 10 * 2, 10 / 2, 10 % 3);

// 2.9 Comparisons
console.log(5 > 3, 2 <= 2, '2' == 2, '2' === 2);

// 2.10 Conditional branching
let ageCheck = 18;
if (ageCheck >= 18) {
  console.log('Adult');
} else {
  console.log('Minor');
}
console.log(ageCheck >= 18 ? 'Adult' : 'Minor');

// 2.11 Logical operators
let a = true;
let b = false;
console.log(a && b, a || b, !a);

// 2.12 Nullish coalescing
let height = null;
console.log(height ?? 100);

// 2.13 Loops
for (let i = 0; i < 3; i++) console.log(i);
let j = 0;
while (j < 3) {
  console.log(j);
  j++;
}

// 2.14 Switch
let day = 2;
switch (day) {
  case 1: console.log('Mon'); break;
  case 2: console.log('Tue'); break;
  default: console.log('Other'); break;
}

// 2.15 Functions
function greet(name) {
  return `Hello, ${name}`;
}
console.log(greet('Yerassyl'));

// 2.16 Function expressions
const square = function (x) {
  return x * x;
};
console.log(square(5));

// 2.17 Arrow functions
const add = (a, b) => a + b;
console.log(add(2, 3));

// 2.18 Specials
console.log(typeof null); // object (special)
console.log(typeof undefined); // undefined
