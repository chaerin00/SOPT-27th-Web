const button=document.getElementById("modalB");
const modal=document.getElementById("modal");
const close=document.getElementById("close");
const bg=document.getElementById("bg");

const openModal=()=>{
    bg.style.display="block";
    modal.style.visibility="visible";
};

button.addEventListener("click",openModal);

const closeModal=()=>{
    modal.style.visibility="hidden";
    bg.style.display="none";
};

close.addEventListener("click",closeModal);