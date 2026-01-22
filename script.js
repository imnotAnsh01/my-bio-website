document.addEventListener("DOMContentLoaded",()=>{

const menu=document.getElementById("menu");
const overlay=document.getElementById("overlay");

document.getElementById("menuBtn").onclick=()=>{
    menu.style.right="0";
    overlay.style.opacity="1";
    overlay.style.visibility="visible";
    document.body.style.overflow="hidden";
};

document.getElementById("closeMenu").onclick=closeMenu;
overlay.onclick=closeMenu;

function closeMenu(){
    menu.style.right="-100%";
    overlay.style.opacity="0";
    overlay.style.visibility="hidden";
    document.body.style.overflow="";
}

/* Typing */
const typing=document.getElementById("typing");
const text="Avanish Pal";
let i=0;
(function type(){
    if(i<text.length){
        typing.textContent+=text[i++];
        setTimeout(type,120);
    }
})();

/* Theme toggle */
const toggle=document.getElementById("themeToggle");
if(localStorage.theme==="light"){
    document.body.classList.add("light");
    toggle.textContent="☀️";
}
toggle.onclick=()=>{
    document.body.classList.toggle("light");
    localStorage.theme=document.body.classList.contains("light")?"light":"dark";
    toggle.textContent=document.body.classList.contains("light")?"☀️":"🌙";
};

});
