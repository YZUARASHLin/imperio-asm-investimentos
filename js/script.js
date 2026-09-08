/*
==========================================
IMPÉRIO ASM INVESTIMENTOS
JavaScript Principal
==========================================
*/

document.addEventListener("DOMContentLoaded", () => {

    /*==========================================
    MENU MOBILE
    ==========================================*/

    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");

    if (menuToggle && menu) {

        menuToggle.addEventListener("click", () => {

            menu.classList.toggle("active");

            const icon = menuToggle.querySelector("i");

            if (menu.classList.contains("active")) {

                icon.classList.remove("fa-bars");
                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");
                icon.classList.add("fa-bars");

            }

        });

    }

    /*==========================================
    FECHAR MENU AO CLICAR
    ==========================================*/

    document.querySelectorAll(".menu a").forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");
            icon.classList.add("fa-bars");

        });

    });

    /*==========================================
    HEADER AO ROLAR
    ==========================================*/

    const header = document.getElementById("header");

    function updateHeader() {

    if (window.scrollY > 40) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}

    updateHeader();

    window.addEventListener("scroll", updateHeader);

    /*==========================================
    BOTÃO VOLTAR AO TOPO
    ==========================================*/

    const scrollTop = document.getElementById("scrollTop");

    function updateScrollButton() {

        if (window.scrollY > 500) {

            scrollTop.classList.add("show");

        } else {

            scrollTop.classList.remove("show");

        }

    }

    updateScrollButton();

    window.addEventListener("scroll", updateScrollButton);

    scrollTop.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });
    /*==========================================
    ANIMAÇÕES AO ROLAR
    ==========================================*/

    const animatedElements = document.querySelectorAll(

        ".info-card, .service-card, .advantage-card, .contact-item, .cta-content"

    );

    const observer = new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("fade-up");
                    entry.target.classList.add("show");

                }

            });

        },

        {

            threshold: 0.15

        }

    );

    animatedElements.forEach((element) => {

        observer.observe(element);

    });

    /*==========================================
    MENU ATIVO CONFORME A SEÇÃO
    ==========================================*/

    const sections = document.querySelectorAll("section[id]");

    const navLinks = document.querySelectorAll(".menu a");

    function activeMenu() {

        let current = "";

        sections.forEach((section) => {

            const sectionTop = section.offsetTop - 140;

            const sectionHeight = section.offsetHeight;

            if (

                window.scrollY >= sectionTop &&
                window.scrollY < sectionTop + sectionHeight

            ) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach((link) => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    }

    activeMenu();

    window.addEventListener("scroll", activeMenu);

    /*==========================================
    PARALLAX SUAVE NO HERO
    ==========================================*/

    const heroImage = document.querySelector(".hero-image");

    window.addEventListener("scroll", () => {

        const offset = window.scrollY * 0.08;

        if (heroImage) {

            heroImage.style.transform =
                `translateY(${offset}px)`;

        }

    });

    /*==========================================
    FECHAR MENU AO REDIMENSIONAR
    ==========================================*/

    window.addEventListener("resize", () => {

        if (window.innerWidth > 768) {

            menu.classList.remove("active");

            const icon = menuToggle.querySelector("i");

            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");

        }

    });
});