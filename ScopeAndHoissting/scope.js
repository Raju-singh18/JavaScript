
// ! Global Scope
// let name="Raju"
// function greet(){
//  console.log("Hello "+ name);
// }
// console.log("Hello " + name);
// greet();

//! Local Scope or function scope
// function greet1(){
//     let name = "Rohit Kumar"
//     console.log("Hello "+ name);
// }
// console.log("Hello "+ name);
// greet1();


//! Block Scope {}, its not applicable for var
{
    let name = "Rohit Kumar Singh"
  console.log(name);   
}

{
    let a=10
    const b=20
    console.log( a+b );
}
// console.log(a); //! error
