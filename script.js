let input = document.getElementsByTagName("input")[0];
let ul = document.getElementsByTagName("ul")[0];
let li = document.getElementsByTagName("li");
let button = document.getElementsByTagName("ion-icon")[0];
let reset = document.getElementById("reset")
let btn = document.getElementsByClassName("btn")[0];

function appendLiElementToUl() {
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";
  // Appends Todo template to li
  li.innerHTML += `<span>
        <ion-icon class="active" name="checkmark-done-outline"></ion-icon>
        <ion-icon name="trash-outline"></ion-icon>
        <ion-icon name="create-outline"></ion-icon>
      </span>`;
}


function inputValueLength() {
  return input.value.length;
}

function afterClickappendLiElementToUl() {
  if (inputValueLength() > 0) {
    appendLiElementToUl();
  }
}

function afterkeyPressappendLiElementToUl() {
  if (inputValueLength() > 0 && event.which === 13) {
    appendLiElementToUl();
  }
}
// Event delegator that checks for click event from other elements
function deleteLi() {
  ul.addEventListener("click", function(e){

    if (e.target.getAttribute("name") === "trash-outline"){
      let li = e.target.parentElement.parentElement;
      li.remove();
      li.classList.toggle("delete-style");
    } 

    else if (e.target.getAttribute("name") === "checkmark-done-outline"){
        let li = e.target.parentElement.parentElement;
        if(li.className.indexOf("done") === -1){
          li.className += "done";
        } else {
          li.className = li.className.replace("done", "");
        } 
    }

     else if(e.target.getAttribute("name") === "create-outline"){
        input.value = e.target.parentElement.parentElement.innerText.trim();
        let li = e.target.parentElement.parentElement;
        li.remove();
    }
  })
  reset.addEventListener("click", function(e) {
    ul.innerHTML  = "";
  })
}

deleteLi();
button.addEventListener("click", afterClickappendLiElementToUl);
input.addEventListener("keypress", afterkeyPressappendLiElementToUl);