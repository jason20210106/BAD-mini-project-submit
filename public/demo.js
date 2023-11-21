// const knex = require('knex')({
//     // Your Knex.js configuration options
//     client: 'sqlite3',
//     useNullAsDefault: true, // Set the useNullAsDefault flag to true
//     // ...
//   });


// async function  inputname(){
//     const inputname = document.querySelector('#name')
//     const inputnameobject = {
//         input: inputname.value,
//     }
//     const resp = await fetch("/input",{
//         method:"POST",
//         headers:{
//             "Content-type":"application/json",
//         },
//         body:JSON.stringify(inputname)
// })
// const result = await resp.json()
// console.log(resp.status)}

// const add = document.querySelector("add")

async function initInputtask(){
    
     const input = document.querySelector("#input-box");
 
     const inputObject = {
         input: input.value,
     }
     console.log(input.value)
     console.log(inputObject)
     input.value = ""
     const resp = await fetch("/input",{
         method:"POST",
         headers:{
             "Content-type":"application/json",
         },
         body:JSON.stringify(inputObject)
     })
     if(resp.ok){
        //TODO: Run TASK1 function
     }
 }


 //TODO: [TASK1] Fetch function [GET] all todo item
 //TODO: [TASK2] Fetch function [PUT] update specific todo item
 async function updateStatus(){
    const input = document.querySelector("#input-box");
    const inputObject = {
        input: input.value,
        }
        const resp = await fetch("/update",{
            method:"POST",
            headers:{
                "Content-type":"application/json",
            },
            body:JSON.stringify(inputObject)
        
     })
 }
 async function getTodoList(){
    //need a GET fetch , think a route
    const resp = await fetch("/gettodolist");
    const result = await resp.json()
    console.log(result)
    if (resp.ok) {
        for (let item of result) {
            let li = document.createElement("li")
            li.innerHTML = item.input;
            listcontainer.appendChild(li)
        }

    }
    console.log(result)
 }

 window.onload=async ()=>{
    await getTodoList()
}