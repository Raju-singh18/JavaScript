
let arr = ["Rakesh","Rohit", true, 24]
let fruits = ["apple", "banana", "orange"]

// ! push
console.log(fruits);
fruits.push("mango");
console.log(fruits);
console.log(fruits.length);

//! pop
let lastFruits = fruits.pop();
console.log(lastFruits);
console.log(fruits);
console.log(fruits.length);

//! shift
let firstFruits = fruits.shift();
console.log(firstFruits);
console.log(fruits);
console.log(fruits.length);

//! unshift
fruits.unshift("kiwi","grape");
console.log(fruits);
console.log(fruits.length);
