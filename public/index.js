const inputbox = document.getElementById("input-box")
const listcontainer = document.getElementById("list-container")
const submit = document.querySelector("#submit")
const reload = document.querySelector("#reload")
// const redo = document.querySelector("#redo")
//  const name = doucment.querySelector("#name")

// function addTask(){
//     if(inputbox.value === ''){
//         alert("Please input your task")
//     }else{
//         let li=document.createElement("li");
//         li.innerHTML = inputbox.value;
//         listcontainer.appendChild(li)
        
//     }
//     inputbox.value = ""
// }

function addTask(){
    if(inputbox.value === ''){
        alert('Please write something into the inbox')
    }else{
        let li = document.createElement("li")
        console.log(li)
        li.innerHTML = inputbox.value;
        listcontainer.appendChild(li)
    }
    console.log("1")
}

listcontainer.addEventListener("click", e=>{
  if(e.target.tagName==="LI"){
    e.target.classList.toggle("checked")
//   }else if(e.target.tagName==="SPAN"){
    // e.target.parentElement.remove()
  }
},false)

// function reload(){
//     const list = document.getElementById("list-container")
//     while(list.firstChild){
//          list.removeChild(list.firstChild)
//     }

// }

reload.addEventListener("click",e=>{
    reload()
})


// window.onload =()=>{
//     initsubmit()
// }

submit.addEventListener("click", e => {
    const selectli = document.querySelectorAll("li");
    const liValues = [];
 
    selectli.forEach(li => {
       liValues.push(li.textContent);
    });
 
    console.log(liValues);
 });

 submit.addEventListener("click", e => {
    const names = document.querySelectorAll("#name");
    const nameArray = [];

    names.forEach(names => {
        nameArray.push(names.textContent);
    });

    console.log(nameArray);
});
// submit.addEventListener("click", (e) => {
//     const names = document.querySelectorAll("#name");
//     const nameArray = Array.from(names).map(name => name.textContent);

//     console.log(nameArray);
// });