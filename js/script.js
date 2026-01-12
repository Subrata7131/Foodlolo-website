document.addEventListener("DOMContentLoaded", () => {
    const heroContent = document.querySelector(".hero-content");

    // Entry Animation for Hero Content
    if (heroContent) {
        heroContent.style.opacity = "0";
        heroContent.style.transform = "translateY(30px)";
        heroContent.style.transition = "all 1s ease-out";

        setTimeout(() => {
            heroContent.style.opacity = "1";
            heroContent.style.transform = "translateY(0)";
        }, 400);
    }

    // Button Click Effect
    const searchBtn = document.querySelector(".hero-search button");
    if (searchBtn) {
        searchBtn.addEventListener("mousedown", () => {
            searchBtn.style.transform = "scale(0.95)";
        });
        searchBtn.addEventListener("mouseup", () => {
            searchBtn.style.transform = "scale(1)";
        });
    }
});

/**
 * Function to handle smooth scrolling to the next section
 * Placed in global scope for HTML 'onclick' access
 */
function scrollToMainContent() {
    window.scrollTo({
        top: window.innerHeight, 
        behavior: 'smooth'
    });
}