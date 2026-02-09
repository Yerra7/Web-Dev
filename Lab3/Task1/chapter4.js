'use strict';

// 4.1 Objects
let user = { name: 'Yerassyl', age: 17 };
console.log(user.name);

// 4.2 References
let user2 = user;
user2.age = 18;
console.log(user.age); // 18

// 4.3 Garbage collection
let temp = { data: 'temp' };
temp = null; // ready for GC

// 4.4 Methods and this
let person = {
  name: 'Yerassyl',
  greet() {
    console.log(`Hello, ${this.name}`);
  },
};
person.greet();

// 4.5 Constructor
function Person(name, age) {
  this.name = name;
  this.age = age;
}
let p = new Person('Yerassyl', 17);
console.log(p.name);

// 4.6 Optional chaining
console.log(person?.address?.street);

// 4.7 Symbol
let id = Symbol('id');
console.log(id);

// 4.8 Object to primitive
let obj = {
  toString() {
    return 'Object string';
  },
};
console.log(String(obj));
