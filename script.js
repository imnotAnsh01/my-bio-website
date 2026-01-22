document.addEventListener("DOMContentLoaded", function () {

    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");
    const overlay = document.getElementById("overlay");

    // OPEN MENU
    menuBtn.onclick = function () {
        menu.style.right = "0px";
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        overlay.style.pointerEvents = "auto";
    };

    // CLOSE MENU
    function closeMenu() {
        menu.style.right = "-280px";
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        overlay.style.pointerEvents = "none";
    }

    closeBtn.onclick = closeMenu;
    overlay.onclick = closeMenu;

    // TYPING ANIMATION (SAFE)
    const typing = document.getElementById("typing");
    if (typing) {
        const text = "Avanish Pal";
        let index = 0;
        const speed = 120;

        function typeEffect() {
            if (index < text.length) {
                typing.textContent += text.charAt(index);
                index++;
                setTimeout(typeEffect, speed);
            }
        }
        typeEffect();
    }

});

// DARK / LIGHT MODE
const toggleBtn = document.getElementById("themeToggle");

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light");
    toggleBtn.textContent = "☀️";
}

toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");

    if (document.body.classList.contains("light")) {
        toggleBtn.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        toggleBtn.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});
