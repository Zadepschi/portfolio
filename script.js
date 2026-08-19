/* ========================================
   MOBILE MENU
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ========================================
       MOBILE MENU
    ======================================== */

    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuToggle && navLinks) {

        menuToggle.addEventListener("click", function () {

            const isOpen = navLinks.classList.toggle("open");

            menuToggle.classList.toggle("active", isOpen);

            menuToggle.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        });


        navLinks.querySelectorAll("a").forEach(function (link) {

            link.addEventListener("click", function () {

                navLinks.classList.remove("open");

                menuToggle.classList.remove("active");

                menuToggle.setAttribute(
                    "aria-expanded",
                    "false"
                );

            });

        });

    }


    /* ========================================
       SCROLL TO TOP
    ======================================== */

    const scrollToTop = document.getElementById("scrollToTop");

    if (scrollToTop) {

        window.addEventListener("scroll", function () {

            if (window.scrollY > 400) {
                scrollToTop.classList.add("show");
            } else {
                scrollToTop.classList.remove("show");
            }

        });


        scrollToTop.addEventListener("click", function () {

            const hero = document.getElementById("main");

            if (hero) {
                hero.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    }

});