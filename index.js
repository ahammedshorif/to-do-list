const inputEl = document.querySelector("#input-box");
const ulListEl = document.querySelector(".ul-list");

function addTask(){
    if(inputEl.value==""){
        alert("Write task before adding!")
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputEl.value;
        ulListEl.appendChild(li);
    }
    inputEl.value = "";
}