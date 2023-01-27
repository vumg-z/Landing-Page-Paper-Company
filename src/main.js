window.onload = () => {
   
    let buttons = document.querySelectorAll("#button_products")
    

    buttons.forEach(element => {
        element.onclick = () => {
            window.location.href = "https://wa.me/5213325065582";
        }
    });



}
