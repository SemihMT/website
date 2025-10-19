window.addEventListener('load', function () {
    // Scroll to the top of the page on load
    window.scrollTo(0, 0);
    // Smooth scrolling for internal anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Smooth scrolling for external links with hashes
    const hash = window.location.hash;
    if (hash) {
        const target = document.querySelector(hash);
        if (target) {
            // Delay the scroll to ensure the page is fully loaded
            setTimeout(() => {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }, 100); // Delay in milliseconds
        }
    }
});