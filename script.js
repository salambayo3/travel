const menuBtn = document.getElementById("menu-btn")
const navLinks = document.getElementById("nav-links")
const menuBtnIcon = menuBtn.querySelector("i")

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "fas fa-close" : "fas fa-bars");
});


navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open")
    menuBtnIcon.setAttribute("class", "fas fa-bars")
})



// scroll effect


const scrollRevealOption = {
    distnce: "50px",
    origin: "bottom",
    duration: 4000,
};


ScrollReveal().reveal(".header_img img", {
    ...scrollRevealOption,
    origin: "right",
});


ScrollReveal().reveal(".header_content h1", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".header_content p", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".header_content form", {
    ...scrollRevealOption,
    delay: 1500,
});
ScrollReveal().reveal(".header_content .bar", {
    ...scrollRevealOption,
    delay: 2000,
});


ScrollReveal().reveal(".header_img_card", {
    duration: 2000,
    interval: 500,
    delay: 2500,
});
