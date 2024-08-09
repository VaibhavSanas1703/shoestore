
let menu = document.querySelector('.menu i');
let navbar = document.querySelector('.navbar');
let navlinks  = document.querySelector('.navlinks');

menu.addEventListener('click',() => {
   navlinks.classList.toggle('toggle-navlinks')
})

window.addEventListener('scroll',() => {
   navbar.classList.toggle('toggle-nav',window.scrollY > 0);
})