
// ! SetTimeOut
// console.log("start....");
// setTimeout(()=>{
//     console.log('execute code after two seconds')
// },2000)
// console.log('End.....');

// ! setinterval
// console.log("start....");
// setInterval(()=>{
//     console.log('Reapeat Code Every one second')
// },1000);
// console.log('End.....');

//!clearInterval
// let count=0;
// const intervalId = setInterval(()=>{
//     count++;
//     console.log('Repeate Code every 1 sec.');
//     if(count === 5){
//         clearInterval(intervalId);
//         console.log('Interval Cleaared');
//     }
// },1000);

//! clearTimeOut
const timeOut = setTimeout(()=>{
    console.log("This will not executed");
},5000);
clearTimeout(timeOut);
console.log("TimeOutCleared");