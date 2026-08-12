
//! SyntaxError

// Occurs when JavaScript syntax is invalid.

if (true {
    console.log("Hello");
}

//! ReferenceError
// Occurs when you access a variable that doesn't exist.

console.log(username);

//! TypeError
// Occurs when an operation is performed on an inappropriate type.

let user = null;
console.log(user.name);

//! RangeError
// Occurs when a value is outside an allowed range.

let number = 10;
number.toFixed(200);
