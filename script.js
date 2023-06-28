const mobMenu = document.querySelector(".nav-links");
const mobMenuToggler = document.querySelector(".nav-toggler");
mobMenuToggler.addEventListener("click", () => {
    mobMenu.classList.toggle("show");
});
document.documentElement.addEventListener("click", (e) => {
    if (!e.target.closest(".nav-links") && !e.target.closest(".nav-toggler"))
        mobMenu.classList.remove("show");
});
