//! GET request
// fetch("https://jsonplaceholder.typicode.com/photos")
// .then(response =>response.json() )
// .then(data => console.log(data))
// .catch((error)=>{
// console.log(error);
// })

//! POST request
// fetch("https://jsonplaceholder.typicode.com/posts",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({
//         title:"foo",
//         body:"bar",
//         userId:101
//     })
// })
// .then(response => response.json())
// .then(data => console.log(data))
// .catch(error => console.log(error));

//! Error Handling
fetch("https://jsonplaceholder.typicode.com/invalid-url")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Http error! status ${response.status}`);
    }
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.error("Error fetching data", error));
