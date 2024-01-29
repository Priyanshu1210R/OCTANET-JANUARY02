const inputBox1 = document.getElementById("input-box1");
const listtodocontainer = document.getElementById("listtodo-container");

function addTask(){
  if(inputBox1.value === ''){
    alert("You must write something!");
  }
  else{
      li = document.createElement("li");
      li.innerHTML = inputBox1.value;
      listtodocontainer.appendChild(li);
      let span = document.createElement("span");
      span.innerHTML = "\u00d7";
      li.appendChild(span);
  }
  inputBox1.value = "";
  saveData();
}

listtodocontainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked1");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listtodocontainer.innerHTML);
}

function showTask(){
    listtodocontainer.innerHTML = localStorage.getItem("data");
}
showTask();