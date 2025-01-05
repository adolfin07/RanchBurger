

let openNav = document.getElementById("openBtn");
let closeNav = document.getElementById("closeBtn");

let navbar = document.querySelector(".navbar");

let navLinks = document.querySelectorAll(".navLinks");



let cartDiv = document.querySelector('.cartDiv');
let openCart = document.getElementById('cart');



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

//observer left
const observerLeft = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});
const hiddenElementsLeft = document.querySelectorAll('.hiddenLeft');
hiddenElementsLeft.forEach((el) => observerLeft.observe(el));
//observer right
const observerRight = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show2');
        } else {
            entry.target.classList.remove('show2');
        }
    });
});
const hiddenElementsRight = document.querySelectorAll('.hiddenRight');
hiddenElementsRight.forEach((el) => observerRight.observe(el));

//cart display
openCart.addEventListener('click', () => {
    cartDiv.classList.toggle("open");
});

let priceSpan = document.querySelectorAll(".price");
let addCart = document.querySelectorAll(".addCart");
let cartProduct = document.querySelector(".cartProducs");

addCart.forEach((button) => {
    button.addEventListener("click", () => {
        // Encuentra el precio relacionado con el ícono clickeado
        var priceSpan = button.previousElementSibling; // El precio está antes del ícono de carrito

        // Muestra el precio del producto correspondiente
        console.log(`El precio del producto es: ${priceSpan.textContent}`);

        cartProduct.innerHTML += `
        
        `;
    });
});

let headings = document.querySelectorAll('.productName');

headings.forEach((heading) => {
    heading.addEventListener('click', () => {
        console.log(heading); 
    });
});






