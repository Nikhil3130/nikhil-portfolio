/* ==========================================
   NIKHIL THOMANDRU PORTFOLIO
   Advanced Interactions
========================================== */


/* =========================
   CURSOR GLOW
========================= */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {

    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================
   SKILL BAR ANIMATION
========================= */

const skillBars = document.querySelectorAll(".skill-progress");

const skillObserver = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                const width =
                    entry.target.getAttribute("data-width");

                entry.target.style.width = width;

                skillObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.5
    }

);

skillBars.forEach((bar) => {

    skillObserver.observe(bar);

});


/* =========================
   NAVIGATION ACTIVE SECTION
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 200;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   MOBILE MENU
========================= */

const menuButton =
    document.querySelector(".menu-btn");

const navigation =
    document.querySelector(".navbar nav");


menuButton.addEventListener("click", () => {

    navigation.classList.toggle("mobile-open");

    const icon =
        menuButton.querySelector("i");

    if (
        navigation.classList.contains("mobile-open")
    ) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close mobile menu */

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navigation.classList.remove("mobile-open");

        const icon =
            menuButton.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================
   PROJECT CARD TILT
========================= */

const projectCards =
    document.querySelectorAll(".project-card");


projectCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        card.style.transform =
            `translateY(-12px)
             perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)`;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================
   SMOOTH LINK EFFECT
========================= */

document.querySelectorAll('a[href^="#"]')
    .forEach((link) => {

        link.addEventListener("click", (event) => {

            const target =
                document.querySelector(
                    link.getAttribute("href")
                );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


/* =========================
   PAGE LOADED
========================= */

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

    console.log(
        "Nikhil Thomandru Portfolio Loaded 🚀"
    );

});
