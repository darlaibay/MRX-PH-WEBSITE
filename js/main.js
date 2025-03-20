const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");

    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute(
        "class",
        isOpen ? "ri-close-line" : "ri-menu-3-line"
    );
});

navLinks.addEventListener("click", (e) => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-3-line");
});

document.querySelectorAll(".nav__links a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = e.target.getAttribute("href");
        window.location.href = target;
    });
});

const faq = document.querySelector(".faq__grid");

if (faq) {
    faq.addEventListener("click", (e) => {
        const faqCard = e.target.closest(".faq__card");
        if (faqCard) {
            const content = faqCard.querySelector(".faq__content");
            if (faqCard.classList.contains("active")) {
                content.style.maxHeight = "0px";
                content.style.opacity = "0";
                faqCard.classList.remove("active");
            } else {
                // Collapse all open FAQs first
                document.querySelectorAll(".faq__card.active").forEach((item) => {
                    item.querySelector(".faq__content").style.maxHeight = "0px";
                    item.querySelector(".faq__content").style.opacity = "0";
                    item.classList.remove("active");
                });

                // Expand the clicked FAQ
                faqCard.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px"; // Dynamic height
                content.style.opacity = "1";
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".scroll-reveal").forEach(element => {
        element.classList.remove("hidden");
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const testimonialsGrid = document.querySelector(".testimonials__grid");
    if (testimonialsGrid) {
        const cards = testimonialsGrid.querySelectorAll(".card");
        if (cards.length > 3) {
            testimonialsGrid.style.overflowX = "auto";
            testimonialsGrid.style.scrollSnapType = "x mandatory";
            cards.forEach(card => {
                card.style.scrollSnapAlign = "start";
            });
        }
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const testimonialsGrid = document.querySelector(".testimonials__grid");
    const leftNav = document.querySelector(".testimonials__nav--left");
    const rightNav = document.querySelector(".testimonials__nav--right");

    if (testimonialsGrid && leftNav && rightNav) {
        leftNav.addEventListener("click", () => {
            testimonialsGrid.scrollBy({ left: -testimonialsGrid.querySelector(".card").clientWidth, behavior: "smooth" });
        });

        rightNav.addEventListener("click", () => {
            testimonialsGrid.scrollBy({ left: testimonialsGrid.querySelector(".card").clientWidth, behavior: "smooth" });
        });
    }
});

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 800,
};

const backToTopBtn = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopBtn.style.display = "flex";
    } else {
        backToTopBtn.style.display = "none";
    }
});

backToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

ScrollReveal().reveal(".header__content h1, .header__content h3", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
});


ScrollReveal().reveal(".header__content .section__description", {
    ...scrollRevealOption,
    delay: 800,
});

ScrollReveal().reveal(".header__content .contact-btn", {
    ...scrollRevealOption,
    delay: 1100,
});

ScrollReveal().reveal(".about__image img", {
    ...scrollRevealOption,
    origin: "left",
});
ScrollReveal().reveal(".about__content .section__subheader", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".about__content .section__header", {
    ...scrollRevealOption,
    delay: 600,
});
ScrollReveal().reveal(".about__content .section__description", {
    ...scrollRevealOption,
    delay: 1000,
});
ScrollReveal().reveal(".about__btn", {
    ...scrollRevealOption,
    delay: 1100,
});

ScrollReveal().reveal(".about-us__title", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".about-us__description", {
    ...scrollRevealOption,
    origin: "right",
    delay: 500,
});

ScrollReveal().reveal(".cs-item", {
    ...scrollRevealOption,
    interval: 200,
});

ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 200,
});

ScrollReveal().reveal(".section__subheader", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
});

ScrollReveal().reveal(".section__header", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
});

ScrollReveal().reveal(".section__description", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 500,
});

ScrollReveal().reveal(".faq__card", {
    ...scrollRevealOption,
    origin: "bottom",
    interval: 200,
});

ScrollReveal().reveal(".cs-picture", {
    ...scrollRevealOption,
    origin: "bottom",
    interval: 200,
});

ScrollReveal().reveal(".testimonials__grid", {
    ...scrollRevealOption,
    origin: "bottom",
    delay: 300,
});

const fleet1 = document.querySelector(".fleet__wrapper-1 .fleet__images");
const fleet2 = document.querySelector(".fleet__wrapper-2 .fleet__images");

const fleet1Content = Array.from(fleet1.children);
const fleet2Content = Array.from(fleet2.children);

fleet1Content.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    fleet1.appendChild(duplicateNode);
});

fleet2Content.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    fleet2.appendChild(duplicateNode);
});

const banner = document.querySelector(".banner__clients");

const bannerContent = Array.from(banner.children);

bannerContent.forEach((item) => {
    const duplicateNode = item.cloneNode(true);
    duplicateNode.setAttribute("aria-hidden", true);
    banner.appendChild(duplicateNode);
});

ScrollReveal().reveal(".feature__card", {
    ...scrollRevealOption,
    interval: 200,
});

ScrollReveal().reveal(".banner__container .section__header", {
    ...scrollRevealOption,
});
ScrollReveal().reveal(".banner__container .section__description", {
    ...scrollRevealOption,
    delay: 500,
});
ScrollReveal().reveal(".banner__btn", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.scroll-reveal', {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
    delay: 200,
});


