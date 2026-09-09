document.addEventListener("DOMContentLoaded", () => {

    /* ================= NAVBAR ================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.05)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    /* ================= REVEAL ANIMATION ================= */

    const revealElements = document.querySelectorAll(
        ".section-intro, " +
        ".about-layout, " +
        ".skill-card, " +
        ".experience-row, " +
        ".project, " +
        ".robotics-grid figure, " +
        ".robotics-achievements > div, " +
        ".team-gallery figure, " +
        ".certificate, " +
        ".education-content"
    );


    const observer = new IntersectionObserver(

        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.08
        }

    );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });


    /* ================= SMOOTH NAVIGATION ================= */

    document
        .querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function(event) {

                const id = this.getAttribute("href");

                if (!id || id === "#") {
                    return;
                }

                const target =
                    document.querySelector(id);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const navbarHeight =
                    navbar
                        ? navbar.offsetHeight
                        : 0;

                const position =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({

                    top: position,

                    behavior: "smooth"

                });

            });

        });


    /* ================= CURRENT YEAR ================= */

    const footerYear =
        document.querySelector("footer span:nth-child(2)");

    if (footerYear) {

        footerYear.textContent =
            `© ${new Date().getFullYear()} Parniyan Ghaleei`;

    }

});
