//  -------------------------TOOGLE ICON DESIGN-------------------------
let nemuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
} 

// -------------------------SCROLL SECTION ACTIVE-------------------------
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= () =>{
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    // -------------------------STICKY NAVBAR-------------------------
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);

    // -------------------------REMOVE TOGGLE ICON AND NAVBAR-------------------------

    document.getElementById("menu-icon").addEventListener("click", () => {
        const navbar = document.querySelector(".navbar");
        navbar.classList.toggle("active");
    });
}

// ------------------------- scroll reveal-------------------------

ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    delay:200,
 });

 ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form',{origin:'buttom'});
 ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
 ScrollReveal().reveal('.home-contact p, .about-content', {origin:'right'});

 // ------------------------- scroll revealtyped js-------------------------

//  const typed = new typed('#multiple-text',{
//     strings: ['Frontend Developer', 'Web Designer'],
//     typeSpeed:70,
//     backSpeed:70,
//     backDelay:1000,
//     loop: true,
//  });
