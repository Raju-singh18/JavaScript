
const greet = (name) =>{
    return `Hello, ${name}`;
}
console.log(greet("Raju Singh"));

const greet1 = name => `Hello, ${name}!`;
console.log(greet1("Rakesh Singh"));

// ! hosting not applied
console.log(greet2("Rakesh Singh"));
const greet2 = name => `Hello, ${name}!`;
