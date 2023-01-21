

window.onload = () => {
    let button = document.getElementById("mobile-menu");
    let iconOpen = document.getElementById("icon_open");
    let iconClosed = document.getElementById("icon_closed");
    let menuList = document.getElementById("mobile_menu_list");

    let isMenuOpen = false; 
    
    button.onclick = () => {
        isMenuOpen = true;

        if(isMenuOpen){
            iconOpen.classList.toggle("hidden");
            iconClosed.classList.toggle("hidden");
            menuList.classList.toggle("hidden");
        }
    }


}
