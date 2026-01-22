document.addEventListener("DOMContentLoaded",()=>{

    const menu=document.getElementById("menu");
    const menuBtn=document.getElementById("menuBtn");
    const closeBtn=document.getElementById("closeBtn");
    const overlay=document.getElementById("overlay");
    const themeBtn=document.getElementById("themeToggle");

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

    // THEME TOGGLE + REMEMBER
const savedTheme = localStorage.getItem("theme");

if(savedTheme === "light"){
    document.body.classList.add("light");
    themeBtn.textContent = "🌞";
}

themeBtn.onclick = () => {
    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
        themeBtn.textContent = "🌞";
    }else{
        localStorage.setItem("theme","dark");
        themeBtn.textContent = "🌙";
    }
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
