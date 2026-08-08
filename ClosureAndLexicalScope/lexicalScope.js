//! Lexical Scope

function outer() {
  let name = "Raju Singh";
  function inner() {
    console.log(name);
  }
  inner();
}

outer();


// ! Closures
function greet(name){
    return function(){
        console.log(`Hello, ${name}`);
    };

}
const greetRaju = greet("Raju");
greetRaju();
