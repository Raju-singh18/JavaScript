
// ! While loop
// let i=0;
// while(i<5){
//  console.log(i);
//  i++;
// }

// ! dowhile loop
// let j=0;
// do{
// console.log(j);
// j++;
// }while(j<5);

// let z=5;
// do{
// console.log(z);
// z++;
// }while(z<5);


//! Reasl life example
let password="";
let correctPassword="admin"
do{
 password=prompt("Enter your password");
}while(password !== correctPassword);
console.log("Access granted");
