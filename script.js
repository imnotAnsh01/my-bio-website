document.addEventListener("DOMContentLoaded", function(){

    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    menuBtn.onclick = function(){
        menu.style.right = "0px";
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        overlay.style.pointerEvents = "auto";
    };

    function closeMenu(){
        menu.style.right = "-280px";
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        overlay.style.pointerEvents = "none";
    }

    closeBtn.onclick = closeMenu;
    overlay.onclick = closeMenu;

});
