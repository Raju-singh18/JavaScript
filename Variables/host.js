
//! Hoisting is JavaScript's default behavior of moving declarations to the top of their scope before execution.

console.log(x)
var x=5;

let y;
console.log(y);
y=10;

const z=10
console.log(z);
