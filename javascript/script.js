document.addEventListener('DOMContentLoaded', function () {
    // Reference to the main navbar
    const navbar = document.getElementById('mainNavbar');

    // Function to add/remove 'shrink' class on scroll
    function handleNavbarShrink() {
        if (window.scrollY > 50) {
            navbar.classList.add('shrink');
        } else {
            navbar.classList.remove('shrink');
        }
    }

    // Run the function when the page is scrolled
    window.addEventListener('scroll', handleNavbarShrink);
});