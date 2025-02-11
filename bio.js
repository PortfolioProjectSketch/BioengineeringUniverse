document.addEventListener("DOMContentLoaded", function () {
    // DARK MODE TOGGLE
    const darkModeToggle = document.createElement("button");
    darkModeToggle.innerText = "🌙 Dark Mode";
    darkModeToggle.classList.add("dark-mode-toggle");
    document.body.appendChild(darkModeToggle);

    darkModeToggle.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        if (document.body.classList.contains("dark-mode")) {
            darkModeToggle.innerText = "☀️ Light Mode";
        } else {
            darkModeToggle.innerText = "🌙 Dark Mode";
        }
    });

    // SCROLL TO TOP BUTTON
    const scrollToTopBtn = document.createElement("button");
    scrollToTopBtn.innerText = "⬆";
    scrollToTopBtn.classList.add("scroll-to-top");
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add("show");
        } else {
            scrollToTopBtn.classList.remove("show");
        }
    });

    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    // INTERACTIVE IMAGE CAPTIONS
    const images = document.querySelectorAll(".image-container img, .post-image img");

    images.forEach((image) => {
        image.addEventListener("mouseover", function () {
            this.style.opacity = "0.7";
        });

        image.addEventListener("mouseout", function () {
            this.style.opacity = "1";
        });
    });
});
