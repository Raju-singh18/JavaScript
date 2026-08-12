// let name="Raju Singh"
// let person={
//     name:"Raju Kumar Singh",
//     age:22,
// }
// console.log(name)
// console.log(person.name);

//! mark And Sweep Algorithm
// function markAndSweep(){
//     console.log("Mark ans sweep algorithm");
//     let user={
//         name:'Raju Kumar Singh',
//         age:22,
//         address:{
//             city:"Delhi",
//             state:"Delhi"
//         }
//     }
// }
// markAndSweep();


//! memory leak 
// setInterval(()=>{
//     let user={
//         name:'Raju Kumar Singh',
//         age:22,
//         address:{
//             city:"Delhi",
//             state:"Delhi"
//         }
//     }
//     console.log(user);
// },1000);

// ! To prevent memory leak
const intervalId = setInterval(()=>{
    let user={
        name:'Raju Kumar Singh',
        age:22,
        address:{
            city:"Delhi",
            state:"Delhi"
        }
    }
    console.log(user);
    clearInterval(intervalId);
},1000);

