const navbar = document.querySelector("#nav");
const navBtn = document.querySelector("#nav-btn");
const closeBtn = document.querySelector("#close-btn");
const sidebar = document.querySelector("#sidebar");
const date = document.querySelector("#date");


// add fixed class to navbar
window.addEventListener("scroll", function () {
    if (window.scrollY > 80) {
        navbar.classList.add("nav-fix");
    } else {
        navbar.classList.remove("nav-fix");
    }
});
// show sidebar
navBtn.addEventListener("click", function () {
    sidebar.classList.add("show-sidebar");
});

// close sidebar
closeBtn.addEventListener("click", function () {
    sidebar.classList.remove("show-sidebar");
});
//set year
date.innerHTML=new Date().getFullYear();