
// !Hosting:- Hoisting is JavaScript's behavior of moving declarations to the top of their scope before code execution.
// Important: Only declarations are hoisted, not initializations.

//! var
var a=10
console.log(a);

// Jab code execute hus to v8 engine (chrome ya node)
var a;
console.log(a); //undefined
a=10;

//! let and const
// let a=10
// console.log(a);

// let a;
// console.log(a);//undefined
// a=10;

// ! //Temporal dead zone:
// console.log(a); //ReferenceError
// let a=10;

//! Function hosting
greet();
function greet(){
    console.log("Hello");
}
greet();

//! Arrow function Hoisting (NOT Allowed)
// greet();
// const greet = () => {
//     console.log("Hello");
// }
// greet(); // TypeError: greet is not a function

//! Function expression: Hoisting not allowed
// greet1();
// const greet = function(){
//     console.log("Hello");
// }
