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
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
    };

    closeBtn.onclick = () => {
        closeAll();
    };

    /* ---------------- PROJECT PANEL ---------------- */
    openProject.onclick = () => {
        projectPanel.style.right = "0";
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
    };

    closeProject.onclick = () => {
        closeAll();
    };

    /* ---------------- OVERLAY (GLOBAL CLOSE) ---------------- */
    overlay.onclick = () => {
        closeAll();
    };

    function closeAll() {
        menu.style.right = "-260px";
        projectPanel.style.right = "-340px";
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
    }

    /* ---------------- THEME TOGGLE ---------------- */
    themeBtn.onclick = () => {
        document.body.classList.toggle("light");
        themeBtn.textContent =
            document.body.classList.contains("light") ? "🌞" : "🌙";
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

    /* ---------------- IMAGE FULLSCREEN PREVIEW ---------------- */
    const preview = document.getElementById("imgPreview");
    const previewImg = document.getElementById("previewImg");
    const closePreview = document.getElementById("closePreview");

    document.querySelectorAll(".project-thumb, .modal-img").forEach(img => {
        img.onclick = () => {
            previewImg.src = img.src;
            preview.style.opacity = "1";
            preview.style.visibility = "visible";
        };
    });

    function closeImagePreview() {
        preview.style.opacity = "0";
        preview.style.visibility = "hidden";
    }

    closePreview.onclick = closeImagePreview;
    preview.onclick = closeImagePreview;

});
