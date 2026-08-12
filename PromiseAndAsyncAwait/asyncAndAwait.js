
//! Async Await 
// async function fetchData(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data", error);
//     }finally{
//         console.log('Fetch operation completed');
//     }
// }

// fetchData();


// async function fetchData(){
//     try {
//         let response = await fetch('https://jsonplaceholder.typicode.com/users');
//         let response1 = await fetch('https://jsonplaceholder.typicode.com/posts');
//         let response2 = await fetch('https://jsonplaceholder.typicode.com/photos')
//         let data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error("Error fetching data", error);
//     }finally{
//         console.log('Fetch operation completed');
//     }
// }
// ! The above code works, but the main performance issue is that the three API requests are executed sequentially:

// Wait for users
// Then wait for posts
// Then wait for photos
// Since these requests are independent, you can run them in parallel using Promise.all().

async function fetchData() {
  try {
    const urls = [
      "https://jsonplaceholder.typicode.com/users",
      "https://jsonplaceholder.typicode.com/posts",
      "https://jsonplaceholder.typicode.com/photos"
    ];

    const responses = await Promise.all(
      urls.map(url => fetch(url))
    );

    const [users, posts, photos] = await Promise.all(
      responses.map(response => {
        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status}`);
        }
        return response.json();
      })
    );

    console.log("Users:", users);
    console.log("Posts:", posts);
    console.log("Photos:", photos);

  } catch (error) {
    console.error("Error fetching data:", error);
  } finally {
    console.log("Fetch operation completed");
  }
}

fetchData();
