'use strict';

// 3.1 Debugging
console.log('Debugging example');

// 3.2 Coding style
// Variables in camelCase, constants in ALL_CAPS

// 3.3 Comments
// Single line comment
/* Multi-line comment */

// 3.4 Ninja code
// Avoid unnecessary code, keep it readable

// 3.5 Mocha tests example
// Not executable here, just demo
/*
describe('Array', function() {
  it('should start empty', function() {
    let arr = [];
    assert.equal(arr.length, 0);
  });
});
*/

// 3.6 Polyfills
if (!Array.prototype.myMethod) {
  Array.prototype.myMethod = function () { /* ... */ };
}
