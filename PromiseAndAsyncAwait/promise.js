// let myPromise = new Promise((resolve, reject)=>{
//     let success = true;

//     if(success){
//         resolve("Promise is resolved successfully");
//     }else{
//         reject("Promise is rejected");
//     }
// })

// myPromise.then((message)=>{
//     console.log(message);
// }).catch((error)=>{
//     console.log(error);
// }).finally(()=>{
//     console.log("Promose is completed");
// })

//! Promise Chaining
// const promise = new Promise((resolve, reject) => {
//     resolve(10);
// });

// promise
//     .then((value) => {
//         console.log(value);
//         return value * 2;
//     })
//     .then((value) => {
//         console.log(value);
//         return value * 3;
//     })
//     .then((value) => {
//         console.log(value);
//     }).catch((error)=>{
//         console.log(error);
//     })

//! Promise + API
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then((response) => {
//         return response.json();
//     })
//     .then((data) => {
//         console.log(data);
//     })
//     .catch((error) => {
//         console.log(error);
//     });

// ! post
// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 101,
//   }),
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error("Error posting data:", error));

//! error handling 
fetch("https://jsonplaceholder.typicode.com/users-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log("Error fetching data:", error));
