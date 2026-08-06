// const person = {
//     name:"Raju Singh",
//     age:22,
//     isTrainer:false
// }
// console.log(person.name)
// console.log(person["age"])

// ! Object add
// person.location = "India"
// console.log(person);

// ! Update object
// person.age = 21
// console.log(person);

//! Object Delete
// delete person.isTrainer;
// console.log(person);

// ! Nested Object
// const person1 = {
//     name:"Rakesh Singh",
//     age:19,
//     isTrainer:true,
//     location:{
//         city: "Kushinagar",
//         state:"Delhi"
//     }
// };
// console.log(person1);
// console.log(person1.location.city)

//! Array Of Objects 
// const students = [
//   {
//     id: 1,
//     name: "Raju",
//     age: 22,
//     course: "MCA"
//   },
//   {
//     id: 2,
//     name: "Aman",
//     age: 23,
//     course: "BCA"
//   },
//   {
//     id: 3,
//     name: "Priya",
//     age: 21,
//     course: "MCA"
//   }
// ];

// console.log(students);
// console.log(students[0]);
// console.log(students[1].name);
// for (let i = 0; i < students.length; i++) {
//     console.log(students[i].name);
// }
// for (let student of students) {
//     console.log(student.name, student.course);
// }


// ! Object method
// const person2 = {
//     name:"Rakesh Singh",
//     age:19,
//     isTrainer:true,
//     location:{
//         city: "Kushinagar",
//         state:"Delhi"
//     },
//     getName: function(){
//         return this.name;
//     },
// };

// console.log(person2.getName());

//! Loops in Object
// for(let key in person2){
//     console.log(key, person2[key]);
// } 

//! Object keys
//? console.log(Object.keys(person2)); //[ 'name', 'age', 'isTrainer', 'location', 'getName' ]
//! Object values 
//? console.log(Object.values(person2));
// [
//   'Rakesh Singh',
//   19,
//   true,
//   { city: 'Kushinagar', state: 'Delhi' },
//   [Function: getName]
// ]

//! Entities
//? console.log(Object.entries(person2));
// [
//   [ 'name', 'Rakesh Singh' ],
//   [ 'age', 19 ],
//   [ 'isTrainer', true ],
//   [ 'location', { city: 'Kushinagar', state: 'Delhi' } ],
//   [ 'getName', [Function: getName] ]
// ] 

//! Object Destructuring
// const student = {
//   name: "Raju",
//   age: 22,
//   course: "MCA",
//   address: {
//     city: "Delhi",
//     state: "Delhi"
//   }
// };

// const { name, age, course } = student;

// console.log(name);
// console.log(age);
// console.log(course);
// const {city, state} = student.address;
// console.log(city, state);


// ! Object Spread Operator
// const person3 = {
//     name:"Mohit",
//     age:22,
//     isTrainer:true
// };
// const person4 = {
//     ...person3,
//     location:"India",
// };
// console.log(person3);


//! operation Chaining
// const person = {
//     name:"Mohit",
//     age:22,
//     isTrainer:true,
//     location:{
//         city:"Delhi",
//         state:"Delhi",
//     },
// };
// console.log(person.location?.city); // "Delhi"
// console.log(person.location?.country); //undefined

//! nullish coalescing operator
const person = {
    name:"Mohit",
    age:22,
    isTrainer:true,
    location:{
        city:"Delhi",
        state:"Delhi",
    },
};

const city = person.location?.city??"Unknown City";
console.log(city);
const city1 = person.location?.xyz??"Unknown City";
console.log(city1);
