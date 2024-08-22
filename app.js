const orderForm = document.getElementById("orderForm");
let selectedService = "";

function openModal(service) {
    selectedService = service;
}

orderForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const whatsappMessage = `Halo, saya ingin memesan layanan ${selectedService}.`;
    const whatsappUrl = `https://wa.me/6285266947121?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
});

// ====scroll reveal====
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.profile', { origin: 'top' });
ScrollReveal().reveal('.service', { origin: 'bottom' });
// ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// ====typed js====
const typed = new Typed('.multiple-text', {
    strings: ['Danuarta PHOTOGRAPHY'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});