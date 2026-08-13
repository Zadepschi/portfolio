document.addEventListener("DOMContentLoaded", () => {

    const reduceMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
        return;
    }


    /* =========================
       ABOUT
       ========================= */

    gsap.from(".about-me", {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
    });


    gsap.from(".about-work", {
        x: 40,
        opacity: 0,
        duration: 1,
        delay: 0.15,
        ease: "power3.out"
    });


    gsap.from(".about-photo-wrapper", {
        scale: 0.85,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "back.out(1.5)"
    });


    gsap.from(".quality", {
        x: 25,
        opacity: 0,
        duration: 0.7,
        delay: 0.3,
        stagger: 0.12,
        ease: "power2.out"
    });


    gsap.from(".computer", {
        x: 30,
        opacity: 0,
        duration: 1,
        delay: 0.25,
        ease: "power3.out"
    });


    /* =========================
       SKILLS
       ========================= */

    gsap.from(".skill-group", {
        y: 25,
        opacity: 0,
        duration: 0.7,
        delay: 0.4,
        stagger: 0.15,
        ease: "power2.out"
    });


    gsap.from(".skill-card", {
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        delay: 0.5,
        stagger: 0.035,
        ease: "back.out(1.4)"
    });


    /* =========================
       LANGUAGES
       ========================= */

    gsap.from(".language-card", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.8,
        stagger: 0.12,
        ease: "power2.out"
    });

});