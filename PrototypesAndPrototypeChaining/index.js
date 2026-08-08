
// ! Prototype

function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    console.log("Hello, "+ this.name);
}

const user = new Person("Raju");
user.getName();

// ! Prototype chaining
const animal = {
    eats:true
}
const dog = {
    barks: true
}
dog.__proto__ = animal; // dog os the child of animal
console.log(dog.eats);
console.log(dog.barks);
