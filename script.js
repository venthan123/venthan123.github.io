document.addEventListener("DOMContentLoaded", () => {

    // Dark mode toggle
    document.getElementById("darkToggle")
        .addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });

    // Scroll reveal animation
    const reveals = document.querySelectorAll(".reveal");

    function revealOnScroll() {
        const windowHeight = window.innerHeight;

        reveals.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100;

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // trigger on load
});
