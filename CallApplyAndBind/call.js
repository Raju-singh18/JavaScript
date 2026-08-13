
function greet(city){
    console.log(`My name is ${this.name} and My City is: ${city}`);
}

const person={
    name:"Raju Singh"
}

// greet(person, "Kushinagar") // gives error
// Using call
greet.call(person, "Kushinagar");
