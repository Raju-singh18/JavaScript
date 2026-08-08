//! in browser this refers to the window object 
// ! Global Context
// console.log(this); //{}

//! Regular Function
// ?In non-strict mode: this is the global object (window in browsers).
// function thisFun(){
//     console.log(this);
// }
// thisFun();

// ? In strict mode: undefined
// "use strict";
// function show() {
//   console.log(this);
// }
// show();

//! in object
// const person = {
//    name:"Raju",
//    greet(){
//     console.log(this); // refers object { name: 'Raju', greet: [Function: greet] }
//     console.log(this.name);//Raju
//    } 
// } 
// person.greet();

// ! Arrow function
// ? Arrow functions do not have their own this. They inherit this from the surrounding scope.

// const person = {
//     name:"Raju",
//     greet: () =>{
//         console.log(this.name); // undefined
//     }
// }
// person.greet();


const person = {
    name:"Raju",
    greet: function(){
        console.log(this.name);
        const arrow = () =>{
            console.log(this.name);
        }
        arrow();
    }
};
person.greet();
