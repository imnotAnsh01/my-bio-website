document.addEventListener("DOMContentLoaded", () => {

    const menu = document.getElementById("menu");
    const menuBtn = document.getElementById("menuBtn");
    const closeBtn = document.getElementById("closeBtn");

    const projectPanel = document.getElementById("projectPanel");
    const openProject = document.getElementById("openProject");
    const closeProject = document.getElementById("closeProject");

    const overlay = document.getElementById("overlay");
    const themeBtn = document.getElementById("themeToggle");

    /* ---------- MENU ---------- */
    menuBtn.onclick = () => openPanel(menu, "-260px");
    closeBtn.onclick = closeAll;

    /* ---------- PROJECT PANEL ---------- */
    openProject.onclick = () => openPanel(projectPanel, "-340px");
    closeProject.onclick = closeAll;

    overlay.onclick = closeAll;

    function openPanel(panel, hidePos){
        panel.style.right = "0";
        overlay.style.opacity = "1";
        overlay.style.visibility = "visible";
        panel.dataset.hide = hidePos;
    }

    function closeAll(){
        menu.style.right = "-260px";
        projectPanel.style.right = "-340px";
        overlay.style.opacity = "0";
        overlay.style.visibility = "hidden";
    }

    /* ---------- THEME (PERSIST) ---------- */
    const savedTheme = localStorage.getItem("theme");
    if(savedTheme === "light"){
        document.body.classList.add("light");
        themeBtn.textContent = "🌞";
    }

    themeBtn.onclick = () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        themeBtn.textContent = isLight ? "🌞" : "🌙";
        localStorage.setItem("theme", isLight ? "light" : "dark");
    };

    /* ---------- TYPING ---------- */
    const text = "Avanish Pal";
    let i = 0;
    const typing = document.getElementById("typing");
    typing.textContent = "";

    (function type(){
        if(i < text.length){
            typing.textContent += text.charAt(i++);
            setTimeout(type,120);
        }
    })();

    /* ---------- IMAGE PREVIEW + ZOOM ---------- */
    const preview = document.getElementById("imgPreview");
    const previewImg = document.getElementById("previewImg");
    const closePreview = document.getElementById("closePreview");
    const panelImg = document.querySelector(".modal-img");

    panelImg.onclick = () => {
        previewImg.src = panelImg.src;
        preview.style.opacity = "1";
        preview.style.visibility = "visible";
        previewImg.classList.remove("zoomed");
    };

    previewImg.onclick = (e) => {
        e.stopPropagation();
        previewImg.classList.toggle("zoomed");
    };

    function closeImage(){
        preview.style.opacity = "0";
        preview.style.visibility = "hidden";
        previewImg.classList.remove("zoomed");
    }

    closePreview.onclick = closeImage;
    preview.onclick = closeImage;

});
