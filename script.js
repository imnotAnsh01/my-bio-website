document.addEventListener("DOMContentLoaded", function(){

    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    menuBtn.addEventListener("click", function(){
        menu.style.right = "0px";
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        overlay.style.pointerEvents = "auto";
    });

    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);

    function closeMenu(){
        menu.style.right = "-280px";
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        overlay.style.pointerEvents = "none";
    }

});
