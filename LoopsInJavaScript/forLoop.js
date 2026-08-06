//! for loop : Runs using array index
// for(let i=0; i<5; i++){
//     console.log("Raju SIngh ",i);
// }

//! for in loop : runs on key of object
// let person={
//     fname:"Mohit",
//     lname:"Kumar",
//     age:25
// };

// for(let key in person){
//  console.log(key+ ": "+person[key]);
// }

//! for of loop: runs element of array or string
let fruits = ["Apple", "Banana", "Cherry"];
for (let fruit of fruits) {
  console.log(fruit);
}

// Real example
const students = [
  {
    name: "Raju",
    age: 25,
  },
  {
    name: "Rakesh",
    age: 19,
  },
  {
    name:"Rohit",
    age:17
  },
];

for(let student of students){
    console.log(student.name+ " is "+student.age+ " years old.");
}
