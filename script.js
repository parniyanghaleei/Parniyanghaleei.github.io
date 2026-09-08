document.addEventListener("DOMContentLoaded", () => {

    /* =========================
       NAVBAR
    ========================= */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 30) {
            navbar.style.boxShadow =
                "0 8px 30px rgba(0,0,0,.06)";
        } else {
            navbar.style.boxShadow = "none";
        }

    });


    /* =========================
       REVEAL
    ========================= */

    const elements = document.querySelectorAll(
        ".section-heading, " +
        ".about-content, " +
        ".skill-card, " +
        ".timeline-item, " +
        ".project-card, " +
        ".robot-image, " +
        ".achievement, " +
        ".team-gallery img"
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
        element.style.transform = "translateY(30px)";
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

});
