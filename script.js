document.addEventListener("DOMContentLoaded", function () {

    const menuBtn = document.getElementById("menuBtn");
    const menu = document.getElementById("menu");
    const closeBtn = document.getElementById("closeBtn");

    const projectBtn = document.getElementById("projectBtn");
    const projectMenu = document.getElementById("projectMenu");
    const closeProject = document.getElementById("closeProject");

    const overlay = document.getElementById("overlay");

    function showOverlay() {
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        overlay.style.pointerEvents = "auto";
    }

    function hideOverlay() {
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
        overlay.style.pointerEvents = "none";
    }

    function closeAllMenus() {
        menu.style.right = "-280px";
        projectMenu.style.right = "-300px";
        hideOverlay();
    }

    // MAIN MENU
    menuBtn.onclick = () => {
        closeAllMenus();
        menu.style.right = "0";
        showOverlay();
    };

    closeBtn.onclick = closeAllMenus;

    // PROJECT MENU
    projectBtn.onclick = () => {
        closeAllMenus();
        projectMenu.style.right = "0";
        showOverlay();
    };

    closeProject.onclick = closeAllMenus;

    overlay.onclick = closeAllMenus;

    // TYPING ANIMATION
    const typing = document.getElementById("typing");
    if (typing) {
        const text = "Avanish Pal";
        let i = 0;
        function typeEffect() {
            if (i < text.length) {
                typing.textContent += text.charAt(i);
                i++;
                setTimeout(typeEffect, 120);
            }
        }
        typeEffect();
    }

    // THEME TOGGLE
    const toggleBtn = document.getElementById("themeToggle");
    if (localStorage.getItem("theme") === "light") {
        document.body.classList.add("light");
        toggleBtn.textContent = "☀️";
    }

    toggleBtn.onclick = () => {
        document.body.classList.toggle("light");
        toggleBtn.textContent =
            document.body.classList.contains("light") ? "☀️" : "🌙";
        localStorage.setItem(
            "theme",
            document.body.classList.contains("light") ? "light" : "dark"
        );
    };
});
