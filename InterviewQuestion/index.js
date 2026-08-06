// ! Q[1]
// let name = "Mohit";

// ! Q[2]
// const name1="Raju Kumar"
// const name2="Raju Kumar"
// const name3="Raju Kumar"
// console.log(name1, name2, name3);

// ! Q[3]
// let name4 = "Raju"
// console.log(`Hello, ${name4}`);
// let name5 = `Raju
// Kumar`;
// console.log(`Hello, ${name5}`);

// let firstName = "Raju"
// let lastName = "Kumar"
// console.log(`Hello, ${firstName} ${lastName}`);
// console.log("Hello " + firstName +" "+ lastName);

// ! Q[4]: Number to String
// let number1=12154;
// console.log(number1.toString());
// console.log(String(number1));

// ! Q[5]: Array inside object
let person = {
    name:"Raju",
    age:25,
    hobbies:["Reading","Gaming","Coding"],
}

console.log(person.hobbies[0]);
console.log(person.hobbies[1]);
console.log(person.hobbies[2]);
  
// ! Q[6]: Object inside Array
let persons = [
    {
    name:"Mohit",
    age:25,
},
{
    name:"John",
    age:30
}
];
console.log(persons[0].name);

// ! Q[7]: How ECMAScript is used today
// ECMAScript is the standard (specification) that defines how JavaScript should work.
// Think of it like this:
// ECMAScript = The rulebook (standard)
// JavaScript = An implementation of that rulebook
// V8 (Chrome), SpiderMonkey (Firefox), JavaScriptCore (Safari), Node.js = Engines/runtimes that execute JavaScript according to the ECMAScript standard.

// ! Q[8]: Is JavaScript us Synchronous or Asynchronous
// JavaScript is single-threaded and synchronous by default, but it can handle asynchronous operations.
