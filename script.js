document.addEventListener("DOMContentLoaded", () => {

    /* ---------------- ELEMENTS ---------------- */
    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");

    const projectPanel = document.getElementById("projectPanel");
    const openProject = document.getElementById("openProject");
    const closeProject = document.getElementById("closeProject");

    const overlay = document.getElementById("overlay");
    const themeBtn = document.getElementById("themeToggle");

    /* ---------------- MENU ---------------- */
    menuBtn.onclick = () => {
        menu.style.right = "0";
        showOverlay();
    };

    closeBtn.onclick = closeAll;

    /* ---------------- PROJECT PANEL ---------------- */
    openProject.onclick = () => {
        projectPanel.style.right = "0";
        showOverlay();
    };

    closeProject.onclick = closeAll;

    /* ---------------- OVERLAY ---------------- */
    overlay.onclick = closeAll;

    function closeAll() {
        menu.style.right = "-260px";
        projectPanel.style.right = "-340px";
        hideOverlay();
    }

    function showOverlay() {
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
    }

    function hideOverlay() {
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
    }

    /* ---------------- THEME (SAVE + LOAD) ---------------- */
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "light") {
        document.body.classList.add("light");
        themeBtn.textContent = "🌞";
    }

    themeBtn.onclick = () => {
        document.body.classList.toggle("light");

        if (document.body.classList.contains("light")) {
            localStorage.setItem("theme", "light");
            themeBtn.textContent = "🌞";
        } else {
            localStorage.setItem("theme", "dark");
            themeBtn.textContent = "🌙";
        }
    };

    /* ---------------- TYPING EFFECT ---------------- */
    const text = "Avanish Pal";
    let i = 0;
    const typing = document.getElementById("typing");

    function typeEffect() {
        if (i < text.length) {
            typing.textContent += text.charAt(i);
            i++;
            setTimeout(typeEffect, 120);
        }
    }
    typeEffect();

    /* ---------------- IMAGE FULLSCREEN + ZOOM ---------------- */
    const preview = document.getElementById("imgPreview");
    const previewImg = document.getElementById("previewImg");
    const closePreview = document.getElementById("closePreview");
    const panelImage = document.getElementById("panelImage");

    let scale = 1;

    panelImage.onclick = () => {
        previewImg.src = panelImage.src;
        preview.style.opacity = "1";
        preview.style.visibility = "visible";
        scale = 1;
        previewImg.style.transform = "scale(1)";
    };

    preview.addEventListener("wheel", (e) => {
        e.preventDefault();
        scale += e.deltaY * -0.001;
        scale = Math.min(Math.max(1, scale), 3);
        previewImg.style.transform = `scale(${scale})`;
    });

    function closeImage() {
        preview.style.opacity = "0";
        preview.style.visibility = "hidden";
    }

    closePreview.onclick = closeImage;
    preview.onclick = closeImage;
});
