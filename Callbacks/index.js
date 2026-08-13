
// function greet(name, callback){
//     console.log("Hello "+ name);
//     callback();
// }

// function callMe(){
//     console.log("I am a callback function");
// }

// greet("Raju", callMe);

// greet("Raju", function(){
//     console.log("I am a callback function");
// })

// SetTimeOut
function showMesssage(){
    console.log('This is a message after 2 sconds');
}

setTimeout(showMesssage, 2000);
