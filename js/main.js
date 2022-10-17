const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');

navBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('mobile-nav-active');
    navBtn.classList.toggle('nav-button-close');
} )

window.addEventListener('click', function() {
    console.log('click on window')
})

mobileNav.addEventListener ('click', function (event) {
    event.stopPropagation();
})