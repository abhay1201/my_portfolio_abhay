function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");

    // Add transition for smooth opening and closing
    menu.style.transition = "max-height 0.3s ease-in-out";
}
