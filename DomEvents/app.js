document.getElementById("btn").onclick = function () {
  alert("HTML DOM Event Listener");
};

let addEvent = document.getElementById("btn1");
addEvent.addEventListener("click", function () {
  alert("Button was Clicked by add Event listener");
});

function sayHello() {
  alert("Hello Guys");
}

let addEvent1 = document.getElementById("add");
let removeEvent = document.getElementById("remove");
addEvent1.addEventListener("click", goodBye);
function goodBye() {
  alert("Good Bye..");
}

removeEvent.addEventListener("click", bye);
function bye() {
  addEvent1.removeEventListener("click", goodBye);
  alert("Event Listener removed..");
}
