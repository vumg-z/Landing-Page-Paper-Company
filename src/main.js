window.onload = () => {
   
    let buttons = document.querySelectorAll("#button")
    

    buttons.forEach(element => {
        element.onclick = () => {
            window.location.href = "https://wa.me/5213325065582";
        }
    });

}
