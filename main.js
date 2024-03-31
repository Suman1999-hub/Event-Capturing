document.querySelector("#child").addEventListener("click",()=>{
    console.log("Child");
},true);

document.querySelector("#parents").addEventListener("click",()=>{
    console.log("Parents");
},true);

document.querySelector("#grandparents").addEventListener("click",()=>{
    console.log("Grandparents");
},true);