//! DOM manipulation
let text = document.getElementById("content");
// text.innerText="New Text"
text.innerHTML="<b>old Text<b>";

let logo = document.getElementById("logo");
logo.src="https://picsum.photos/300/300";

let link = document.getElementById("link");
link.innerText="Youtube"
link.href="https://www.youtube.com";

//! Adding and removing elements
function addButton(){
  const box = document.createElement("div");
  box.innerHTML = 'New Me';
  box.id="box";
  document.getElementById("container").appendChild(box);
}


function removeButton(){
    const container = document.getElementById("box");
    if(container){
        container.remove();
    }else{
        alert("No Box to remove");
    }
}
