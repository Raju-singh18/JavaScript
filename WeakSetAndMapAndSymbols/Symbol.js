// ! Symbol is a primitive data type in JavaScript. It is mainly used to create unique identifiers.


// const sym1= Symbol("id");
// const sym2 = Symbol("id");

// console.log(sym1 === sym2) // false

const user={
    name:"Raju Singh"
}
const uid = Symbol("id");
user[uid]=12345;
console.log(user) //{ name: 'Raju Singh', Symbol(id): 12345 }
console.log(Object.keys(user)); //[ 'name' ]

