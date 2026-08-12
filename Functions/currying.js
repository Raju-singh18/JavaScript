
//! Currying is a technique where a function that normally takes multiple arguments is transformed into a sequence of functions, where each function takes one argument at a time.

//! Normal function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(10, 20, 30));
// 60


//! Curried function
function add(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));
// 60


//! 1. Currying with Arrow Functions
// The same example can be written more concisely:

const add = (a) => (b) => (c) => a + b + c;
console.log(add(10)(20)(30));
// 60

//!2. Currying Uses Closures
// Currying is closely related to closures.

const multiply = (a) => {
    return (b) => {
        return a * b;
    };
};

const multiplyBy10 = multiply(10);

console.log(multiplyBy10(5));  // 50
console.log(multiplyBy10(8));  // 80 