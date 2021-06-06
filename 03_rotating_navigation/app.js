const container = document.getElementById('container');
const NavMenu = document.getElementById('nav-menu');
const Nav = document.querySelectorAll('.nav');

NavMenu.addEventListener('click', () => {
    NavMenu.classList.toggle('show-navMenu');
    container.classList.toggle('slide-container');
    Nav.forEach(nav => {
        nav.classList.toggle('show-nav');
    })
})