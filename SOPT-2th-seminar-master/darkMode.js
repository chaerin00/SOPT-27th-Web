const button=document.getElementById("button");
const p=document.getElementById("p");
const h2=document.getElementById("h2");
const div=document.getElementById("div");
let mode=0;


const changeMode=()=>{
    if(mode==0){
        button.style.left="-10px";
        p.innerText="It's dark theme!";
        div.style.background="rgb(54, 52, 52)";
        p.style.color=h2.style.color="white";
        document.body.style.backgroundColor="dimgray";
        document.body.style.transition="background-color 1s";
        mode=1;
        
    }
    else{
        button.style.left="10px";
        p.innerText="It's light theme!";
        div.style.background="#d3d0d0";
        p.style.color=h2.style.color="black";
        document.body.style.backgroundColor="white";
        document.body.style.transition="background-color 1s";
        mode=0;
    }
};
button.addEventListener("click",changeMode)