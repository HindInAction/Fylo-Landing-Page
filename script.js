const humburger = document.querySelector(".humburger"); 
const open = document.querySelector(".open"); 
const close = document.querySelector(".close"); 
const navbar = document.querySelector(".navbar ul");


humburger.addEventListener("click", function(){

    open.classList.toggle("active");
    close.classList.toggle("active");
    navbar.classList.toggle("active");
}); 