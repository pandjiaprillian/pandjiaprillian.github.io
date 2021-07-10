const nav = document.getElementById('nav');

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 60) {
        nav.classList.add('nav-dark');
    } else if (scrollPosition <= 60) {
        nav.classList.remove('nav-dark');
    }
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