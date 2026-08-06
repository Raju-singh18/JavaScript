//! Array reduce method
// const numbers = [1,2,3,4,5,10,20];
// const sum = numbers.reduce((acc, curr)=>{
//     return acc+curr
// },0);
// console.log(sum);

//! Slice: Do not affect original array
// const fruits = ["apple","banana","orange","date","cherry"];
// const sliceFruits = fruits.slice(1,3);
// console.log(sliceFruits);
// console.log(fruits);

// ! splice: Affect the original array
// const fruits1 = ["apple","banana","orange","date","cherry"];
// const splicedfruits = fruits1.splice(1,2);
// console.log(splicedfruits); //[ 'banana', 'orange' ]
// console.log(fruits1); //[ 'apple', 'date', 'cherry' ]

// const fruits2 = ["apple", "banana", "orange", "date", "cherry"];
// const splicedFruit = fruits2.splice(1, 2, "X", "Y");
// console.log(splicedFruit); //[ 'banana', 'orange' ]
// console.log(fruits2); //[ 'apple', 'X', 'Y', 'date', 'cherry' ]

//! concat
// const array1 = [1, 2, 3];
// const array2 = [4, 5, 6];
// console.log(array1.concat(array2)); //[1,2,3,4,5,6]

//! flat
// const nestedArray = [1,2,[3,4],[5,6]]
// const flatArray = nestedArray.flat();
// console.log(flatArray); 

// const nestedArray1 = [1,2,[3,4],[5,6,[7,8]]];
// const flatenedArray = nestedArray1.flat();
// console.log(flatenedArray);
// console.log(nestedArray1.flat(2));


//! Spread Operator
const arr1 = [1,2,3]
const arr2 = [4,5,6];
console.log([...arr1, ...arr2]); //[1,2,3,4,5,6]
console.log([...arr1,[10,20,30]]); //[ 1, 2, 3, [ 10, 20, 30 ] ]
console.log([...arr1,...[10,20,30]]); //[ 1, 2, 3, 10, 20, 30 ]
console.log([...arr1,10,20,30,...arr2]); 
//[
//    1, 2, 3, 10, 20,
//   30, 4, 5,  6
// ]

//! Destructuring
const arr3 = [1,2,3]
const [a,b,c] = arr3;
console.log(a);
console.log(b);
console.log(c);
