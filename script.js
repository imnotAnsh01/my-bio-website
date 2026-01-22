document.addEventListener("DOMContentLoaded",()=>{

const menu=document.getElementById("menu");
const projectMenu=document.getElementById("projectMenu");
const projectDetail=document.getElementById("projectDetail");
const overlay=document.getElementById("overlay");

function openPanel(panel){
    menu.classList.remove("active");
    projectMenu.classList.remove("active");
    projectDetail.classList.remove("active");
    panel.classList.add("active");
    overlay.style.opacity="1";
    overlay.style.visibility="visible";
    document.body.style.overflow="hidden";
}

function closeAll(){
    menu.classList.remove("active");
    projectMenu.classList.remove("active");
    projectDetail.classList.remove("active");
    overlay.style.opacity="0";
    overlay.style.visibility="hidden";
    document.body.style.overflow="";
}

document.getElementById("menuBtn").onclick=()=>openPanel(menu);
document.getElementById("projectBtn").onclick=()=>openPanel(projectMenu);
document.getElementById("closeMenu").onclick=closeAll;
document.getElementById("closeProject").onclick=closeAll;
document.getElementById("closeDetail").onclick=closeAll;
overlay.onclick=closeAll;

/* PROJECT DETAIL */
document.getElementById("bioProject").onclick=()=>{
    projectMenu.classList.remove("active");
    projectDetail.classList.add("active");
};

/* TYPING */
const typing=document.getElementById("typing");
const text="Avanish Pal";
let i=0;
(function type(){
    if(i<text.length){
        typing.textContent+=text[i++];
        setTimeout(type,120);
    }
})();

/* THEME */
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
