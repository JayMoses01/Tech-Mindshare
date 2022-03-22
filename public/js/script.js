// "Burger" menu for mobile. I referred to "The Net Ninja" Bulma YouTube tutorial on navbar "burgers" here: https://www.youtube.com/watch?v=qvn2SxGvyPs&list=PL4cUxeGkcC9iXItWKbaQxcyDT1u6E7a8a&index=6&t=174s.
const menuBurger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

menuBurger.addEventListener('click', () => {
    navLinks.classList.toggle('is-active');
});