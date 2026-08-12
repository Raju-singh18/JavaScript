//!  Error Handling with Functions
// function divide(a, b) {

//     try {

//         if (b === 0) {
//             throw new Error("Cannot divide by zero");
//         }

//         return a / b;

//     } catch (error) {

//         console.log("Error:", error.message);

//     }
// }

// console.log(divide(10, 2));

// console.log(divide(10, 0));

//! Error Handling with Promises
// With promises, you can use .catch().

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log("Request failed:", error);
//     });


//! Error Handling with async/await
// When using async/await, try...catch is commonly used.

// async function getUsers() {

//     try {

//         const response =
//             await fetch("https://jsonplaceholder.typicode.com/todos/1");

//         const data =
//             await response.json();

//         console.log(data);

//     } catch (error) {

//         console.log("Failed to fetch users:", error);

//     }
// }
// getUsers();


//! Custom Error
// You can create your own error class.

// class ValidationError extends Error {

//     constructor(message) {
//         super(message);
//         this.name = "ValidationError";
//     }

// }

// try {

//     throw new ValidationError(
//         "Invalid email address"
//     );

// } catch (error) {

//     console.log(error.name);
//     console.log(error.message);
// }


//! throw
// You can manually create an error using throw.

try {

    let age = 15;

    if (age < 18) {
        throw new Error("You must be 18 or older.");
    }
    console.log("Allowed");

} catch (error) {

    console.log(error.message);

}
