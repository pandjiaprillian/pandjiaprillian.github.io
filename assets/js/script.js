//* AOS Initialize
AOS.init({
    once: true,
});

const nav = document.getElementById('nav');
const navLinks = nav.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 60) {
        nav.classList.add('nav-dark');
    } else if (scrollPosition <= 60) {
        nav.classList.remove('nav-dark');
    }
});

//* GSAP Animation
gsap.registerPlugin(TextPlugin);

gsap.to('.introduce-text .hallo-h3', {
    duration: 2, 
    delay: 1.5,
    text: 'Hallo,'
});

gsap.to('.introduce-text .pandjiaprillian', {
    duration: 2, 
    delay: 1.5,
    text: 'I Am Pandji Aprillian'
});

gsap.to('.introduce-text .junior-wd', {
    duration: 2, 
    delay: 1.5,
    text: 'Junior Web Developer'
});

gsap.from('.navbar', {
    duration: 1.5,
    y: '-100%',
    opacity: 0
});

gsap.from('#hero .picture-pic', {
    duration: 1,
    y: -100,
    opacity: 0
});

gsap.from('#hero .disquss', {
    duration: 1,
    delay: 3,
    x: -50,
    opacity: 0
});

gsap.from('.introduce-text', {
    duration: 1,
    x: -50,
    opacity: 0,
    delay: 0.5,
    ease: 'back'
});

gsap.from('#hero .social-groups', {
    duration: 1,
    y: 100,
    opacity: 0
});


//* Google Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbw9odaseLq7kwhbsHerjIeD9mAQpz6opSf06xFTS92HsXDartb1YxJkIRsK6Yja9g6V7A/exec';
const form = document.forms['contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', e => {
    e.preventDefault();
    btnLoading.classList.toggle('d-none');
    btnKirim.classList.toggle('d-none');
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            btnLoading.classList.toggle('d-none');
            btnKirim.classList.toggle('d-none');
            myAlert.classList.toggle('d-none');
            form.reset();
            console.log(response);
        })
        .catch(error => console.error('Error!', error.message));
});