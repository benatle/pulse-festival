const header = document.querySelector(".header");
const burger = document.querySelector(".burger");
const navLinks = document.querySelectorAll(".nav a");

window.addEventListener("scroll", function () {
    if (window.scrollY > 10) {
        header.classList.add("is-scrolled");
    } else {
        header.classList.remove("is-scrolled");
    }
});

if (burger) {
    burger.addEventListener("click", function () {
        header.classList.toggle("menu-open");

        const menuIsOpen = header.classList.contains("menu-open");
        burger.setAttribute("aria-expanded", menuIsOpen);
    });
}

navLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        header.classList.remove("menu-open");

        if (burger) {
            burger.setAttribute("aria-expanded", "false");
        }
    });
});