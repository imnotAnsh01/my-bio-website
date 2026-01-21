let isOpen = false;

function toggleMenu(){
    let menu = document.getElementById("menu");

    if(isOpen){
        menu.style.right = "-280px";
        isOpen = false;
    }else{
        menu.style.right = "0px";
        isOpen = true;
    }
}