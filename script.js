const inputbox = document.getElementById("inputbox");
const addbtn = document.getElementById("addbtn");
const listcontainer = document.getElementById("listcontainer");



addbtn.addEventListener("click",()=>{
     
    let task = inputbox.value;
    let li = document.createElement("li");
    li.innerText = task;
    let span = document.createElement('span');
    span.innerHTML = `<i class="uil uil-times"></i>`;
    li.appendChild(span)
    listcontainer.append(li);
    inputbox.value = "";
    saveData()
    
})

listcontainer.addEventListener("click",(e)=>{
     if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
     }
     if(e.target.tagName === "I"){
        e.target.parentElement.parentElement.remove();
        saveData()
     }
},false)

function saveData(){
  localStorage.setItem("data",listcontainer.innerHTML);
}


window.addEventListener("load",()=>{
    let data = localStorage.getItem("data");
     listcontainer.innerHTML = data;
 })
 