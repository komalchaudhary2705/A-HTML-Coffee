const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener("click",()=>{
    // toggle menu button
    document.body.classList.toggle("show-mobile-menu")
})

menuCloseButton.addEventListener("click",()=>{
    // close with close button
     document.body.classList.remove("show-mobile-menu");
})