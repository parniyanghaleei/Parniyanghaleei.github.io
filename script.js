document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAVBAR
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (!navbar) return;

        if (window.scrollY > 30) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.06)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    /* =========================
       SCROLL REVEAL
    ========================= */

    const elements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".project-card, " +
        ".robot-image, " +
        ".achievement, " +
        ".team-gallery img, " +
        ".certificate-card"
    );


    const observer = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: .12
        }
    );


    elements.forEach(element => {

        element.style.opacity = "0";

        element.style.transform =
            "translateY(30px)";

        element.style.transition =
            "opacity .7s ease, transform .7s ease";

        observer.observe(element);

    });


    /* =========================
       PROJECT HOVER
    ========================= */

    document.querySelectorAll(".project-card")
        .forEach(card => {

            card.addEventListener("mousemove", event => {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                card.style.setProperty(
                    "--mouse-x",
                    `${x}px`
                );

                card.style.setProperty(
                    "--mouse-y",
                    `${y}px`
                );

            });

        });


    /* =========================
       SMOOTH ANCHORS
    ========================= */

    document.querySelectorAll('a[href^="#"]')
        .forEach(anchor => {

            anchor.addEventListener("click", function(event) {

                const targetId =
                    this.getAttribute("href");

                if (!targetId || targetId === "#") {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) return;

                event.preventDefault();

                const navbarHeight =
                    navbar ? navbar.offsetHeight : 0;

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    navbarHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: "smooth"
                });

            });

        });


    /* =========================
       CURRENT YEAR
    ========================= */

    const footerText =
        document.querySelector("footer p");

    if (footerText) {

        footerText.textContent =
            `© ${new Date().getFullYear()} Parniyan Ghaleei`;

    }

});
