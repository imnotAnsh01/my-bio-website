const menu = document.getElementById("menu");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const overlay = document.getElementById("overlay");

menuBtn.addEventListener("click", () => {
    menu.style.right = "0px";
    overlay.style.opacity = "1";
    overlay.style.visibility = "visible";
});

closeBtn.addEventListener("click", closeMenu);
overlay.addEventListener("click", closeMenu);

function closeMenu(){
    menu.style.right = "-280px";
    overlay.style.opacity = "0";
    overlay.style.visibility = "hidden";
}
