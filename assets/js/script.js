

let openNav = document.getElementById("openBtn");
let closeNav = document.getElementById("closeBtn");

let navbar = document.querySelector(".navbar");

let navLinks = document.querySelectorAll(".navLinks");


openNav.addEventListener("click", function () {
    navbar.style.top = "0";
    openNav.style.display = "none";
    closeNav.style.display = "block";

});

closeNav.addEventListener("click", function () {
    navbar.style.top = "-100%";
    openNav.style.display = "block";
    closeNav.style.display = "none";
});

navLinks.forEach(link => {
    link.addEventListener("click", function () {
        navbar.style.top = "-100%";
        openNav.style.display = "block";
        closeNav.style.display = "none";
    })
});

//observer

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
        }
    });
});

