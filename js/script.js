/* =================================
   ANIMATED NAVIGATION
================================= */

.navbar-nav .nav-link {
    position: relative;
    transition: color 0.3s ease;
}

.navbar-nav .nav-link::after {
    content: "";
    position: absolute;
    bottom: 3px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: #75b6ff;
    transition: width 0.3s ease;
}

.navbar-nav .nav-link:hover::after,
.navbar-nav .nav-link.active::after {
    width: 100%;
}

.navbar-nav .nav-link.active {
    color: #75b6ff;
}

// =====================================
// 4. DARK / LIGHT MODE TOGGLE
// =====================================

const themeToggle = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const themeText = document.getElementById("themeText");

themeToggle.addEventListener("click", function() {

    // Switch between dark and light themes
    document.body.classList.toggle("dark-mode");

    // Check the current theme
    const isDark = document.body.classList.contains("dark-mode");

    // Update button appearance
    if (isDark) {
        themeIcon.textContent = "☀️";
        themeText.textContent = "Light Mode";
    } else {
        themeIcon.textContent = "🌙";
        themeText.textContent = "Dark Mode";
    }

});


// =====================================
// 5. ANIMATED NAVIGATION
// =====================================

// Highlight the active navigation link
const animatedLinks = document.querySelectorAll(
    ".navbar-nav .nav-link"
);

const pageSections = document.querySelectorAll("section[id]");

const sectionObserver = new IntersectionObserver(function(entries) {

    entries.forEach(function(entry) {

        if (entry.isIntersecting) {

            animatedLinks.forEach(function(link) {

                link.classList.remove("active");

                if (link.getAttribute("href") === "#" + entry.target.id) {
                    link.classList.add("active");
                }

            });

        }

    });

}, {
    threshold: 0.3
});

// Observe all website sections
pageSections.forEach(function(section) {
    sectionObserver.observe(section);
});

