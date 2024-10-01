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

document.addEventListener('DOMContentLoaded', function () {
    const typingElement = document.getElementById('typing');
    const textArray = ["Hi, I'm Jayson van Olffen", "I'm a Software Engineering student.", "Welcome to my portfolio!"];
    let arrayIndex = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Milliseconds per character
    const erasingSpeed = 50; // Milliseconds per character when erasing
    const delayBetweenTexts = 1000; // Delay between each phrase

    // Typing function
    function type() {
        if (charIndex < textArray[arrayIndex].length) {
            typingElement.textContent += textArray[arrayIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, typingSpeed);
        } else {
            setTimeout(erase, delayBetweenTexts);
        }
    }

    // Erasing function
    function erase() {
        if (charIndex > 0) {
            typingElement.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, erasingSpeed);
        } else {
            arrayIndex++;
            if (arrayIndex >= textArray.length) {
                arrayIndex = 0; // Loop back to the first text
            }
            setTimeout(type, typingSpeed + 500); // Pause before typing next phrase
        }
    }

    // Start the typing effect
    setTimeout(type, delayBetweenTexts);
});

document.addEventListener("DOMContentLoaded", function() {
    // Get the current path
    const path = window.location.pathname;

    // Check if the URL does not end with '/' or does not have an extension
    if (!path.endsWith('/') && !path.includes('.')) {
      // Append .html and redirect
      window.location.replace(path + ".html");
    }
});