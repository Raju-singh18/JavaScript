
// ! Object: An object is a non-primitive data type that stores data in the form of properties (key-value pairs) and methods (functions).

let person = {
    name:"Mohit",
    age: 30,
    city:"New York"
}

console.log(person.name);
console.log(person.age);
console.log(person.city);
console.log(person);
console.log(typeof person);

//! Array: An array is a non-primitive data type used to store multiple values of any data type in a single variable.
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits);
console.log(typeof fruits);


//! Function:A function is a reusable block of code designed to perform a particular task. Functions are objects in JavaScript.
function greet(name) {
    return "Welcome " + name;
}
console.log(greet("Raju"))
console.log(typeof greet);

// ! Alert is not working in Node
// alert("Hello, Mohit Decodes");
