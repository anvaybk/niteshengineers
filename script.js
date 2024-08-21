// Toggle Hamburger Menu
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('change', function() {
        if (this.checked) {
            menu.classList.add('open');
        } else {
            menu.classList.remove('open');
        }
    });
});

// Service Worker Registration
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/serviceworker.js')
            .then(function(registration) {
                console.log('Service Worker registered with scope:', registration.scope);
            })
            .catch(function(error) {
                console.log('Service Worker registration failed:', error);
            });
    });
}

// Form Submission to Email
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            }).then(response => {
                if (response.ok) {
                    alert('Your message has been sent successfully!');
                    contactForm.reset();
                } else {
                    alert('There was a problem sending your message. Please try again later.');
                }
            }).catch(error => {
                console.error('Error:', error);
                alert('There was a problem sending your message. Please try again later.');
            });
        });
    }
});
