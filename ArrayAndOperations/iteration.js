//! forEach: return same array
// fruits.forEach((item, index) => {
//   console.log(`Item: ${item}, Index: ${index}`);
// });

// ! map: return a new array
// let numbers = [1,2,3,4,5,8,6];
// // let doubled = numbers.map((num) => num*2);
// let doubled = numbers.map((num) => {
//     return num*2;
// });
// console.log(numbers);
// console.log(doubled);

//! filter : return new array
// let numbers = [1,2,3,4,5,8,6];
// let evenNumber = numbers.filter((num)=>{
//     return num%2===0;
// });
// console.log(evenNumber);

// ! find: return first match element
// let numbers = [1,2,3,4,5,8,6];
// let foundNumber = numbers.find((num)=>{
//     return num>3;
// })
// console.log(foundNumber);

//! indexOf
// let fruits = ["aaple", "banana", "cherry"];
// let index = fruits.indexOf("banana");
// console.log(index);

//! sort : return same array
let numbers=[3,44,4,6,10];
//! By default, Array.prototype.sort() sorts elements as strings (lexicographically), not as numbers.
numbers.sort();
// console.log(numbers);//[ 10, 3, 4, 44, 6 ]
// numbers.sort((a,b)=> a-b);
// console.log(numbers); //[ 3, 4, 6, 10, 44 ]

// ! Real life example
const students = [
    {
        name:"John",
        score:80
    },
     {
        name:"Tommy",
        score:60
    },
     {
        name:"Raju",
        score:95
    }
]
const passedStudents = students.filter((student)=> student.score >= 70);
console.log(passedStudents);
const names = passedStudents.map((s)=>s.name);
console.log(names);
