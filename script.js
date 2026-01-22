document.addEventListener("DOMContentLoaded",()=>{

const menu=document.getElementById("menu");
const menuBtn=document.getElementById("menuBtn");
const closeBtn=document.getElementById("closeBtn");
const overlay=document.getElementById("overlay");

const openProject=document.getElementById("openProject");
const projectPanel=document.getElementById("projectPanel");
const closeProject=document.getElementById("closeProject");

const themeBtn=document.getElementById("themeToggle");

/* THEME PERSIST */
if(localStorage.getItem("theme")==="light"){
document.body.classList.add("light");
themeBtn.textContent="🌞";
}

themeBtn.onclick=()=>{
document.body.classList.toggle("light");
const mode=document.body.classList.contains("light")?"light":"dark";
localStorage.setItem("theme",mode);
themeBtn.textContent=mode==="light"?"🌞":"🌙";
};

/* MENU */
menuBtn.onclick=()=>openLayer(menu);
closeBtn.onclick=closeAll;

/* PROJECT PANEL */
openProject.onclick=()=>openLayer(projectPanel);
closeProject.onclick=closeAll;
overlay.onclick=closeAll;

function openLayer(el){
el.style.right="0";
overlay.style.opacity="1";
overlay.style.visibility="visible";
document.body.style.overflow="hidden";
}

function closeAll(){
menu.style.right="-260px";
projectPanel.style.right="-100%";
overlay.style.opacity="0";
overlay.style.visibility="hidden";
document.body.style.overflow="";
}

/* IMAGE PREVIEW + TAP ZOOM */
const preview=document.getElementById("imgPreview");
const previewImg=document.getElementById("previewImg");
const panelImage=document.getElementById("panelImage");
const closePreview=document.getElementById("closePreview");

panelImage.onclick=()=>{
previewImg.src=panelImage.src;
preview.style.opacity="1";
preview.style.visibility="visible";
};

let zoom=false;
previewImg.onclick=()=>{
zoom=!zoom;
previewImg.classList.toggle("zoomed");
};

closePreview.onclick=closeImage;
preview.onclick=closeImage;

function closeImage(){
preview.style.opacity="0";
preview.style.visibility="hidden";
previewImg.classList.remove("zoomed");
zoom=false;
}

/* TYPING */
const text="Avanish Pal";
let i=0;
const typing=document.getElementById("typing");
(function type(){
if(i<text.length){
typing.textContent+=text[i++];
setTimeout(type,120);
}
})();

});
