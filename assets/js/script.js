const nav = document.getElementById('nav');

window.addEventListener('scroll', function() {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= 60) {
        nav.classList.add('nav-dark');
    } else if(scrollPosition <= 60) {
        nav.classList.remove('nav-dark');
    }
});