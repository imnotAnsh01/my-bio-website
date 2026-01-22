document.addEventListener("DOMContentLoaded",()=>{

    const menu=document.getElementById("menu");
    const menuBtn=document.getElementById("menuBtn");
    const closeBtn=document.getElementById("closeBtn");
    const overlay=document.getElementById("overlay");
    const themeBtn=document.getElementById("themeToggle");

    const openProject=document.getElementById("openProject");
    const projectPanel=document.getElementById("projectPanel");
    const closeProject=document.getElementById("closeProject");

    // MENU
    menuBtn.onclick=()=>{
        menu.style.right="0";
        overlay.style.opacity="1";
        overlay.style.visibility="visible";
    };

    function closeMenu(){
        menu.style.right="-260px";
        overlay.style.opacity="0";
        overlay.style.visibility="hidden";
    }

    closeBtn.onclick=closeMenu;
    overlay.onclick=closeMenu;

    // PROJECT PANEL
    openProject.onclick=()=>{
        projectPanel.style.right="0";
        overlay.style.opacity="1";
        overlay.style.visibility="visible";
    };

    closeProject.onclick=()=>{
        projectPanel.style.right="-340px";
        overlay.style.opacity="0";
        overlay.style.visibility="hidden";
    };

    // THEME
    themeBtn.onclick=()=>{
        document.body.classList.toggle("light");
        themeBtn.textContent=
            document.body.classList.contains("light")?"🌞":"🌙";
    };

    // TYPING
    const text="Avanish Pal";
    let i=0;
    const typing=document.getElementById("typing");

    function type(){
        if(i<text.length){
            typing.textContent+=text.charAt(i);
            i++;
            setTimeout(type,120);
        }
    }
    type();
});
