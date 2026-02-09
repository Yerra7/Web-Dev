'use strict';

// 5.1 Methods of primitives
let str = 'hello';
console.log(str.toUpperCase(), str.length);

// 5.2 Numbers
let num = 123.45;
console.log(num.toFixed(1));

// 5.3 Strings
let name = 'Yerassyl';
console.log(`Hello, ${name}`);

// 5.4 Arrays
let arr = [1, 2, 3];
console.log(arr[0]);

// 5.5 Array methods
arr.push(4);
arr.pop();
arr.shift();
arr.unshift(0);
console.log(arr);

// 5.6 Iterables
for (let value of arr) console.log(value);

// 5.7 Map and Set
let map = new Map();
map.set('name', 'Yerassyl');
console.log(map.get('name'));

let set = new Set([1,2,3]);
set.add(4);
console.log(set.has(2));

// 5.8 WeakMap and WeakSet
let weakMap = new WeakMap();
let objKey = {};
weakMap.set(objKey, 'value');

// 5.9 Object.keys, values, entries
console.log(Object.keys(user), Object.values(user), Object.entries(user));

// 5.10 Destructuring
let [first, second] = [1, 2];
console.log(first, second);

let { name: userName } = user;
console.log(userName);

// 5.11 Date and time
let now = new Date();
console.log(now.toLocaleString());

// 5.12 JSON methods
let json = JSON.stringify(user);
console.log(json);
console.log(JSON.parse(json));
