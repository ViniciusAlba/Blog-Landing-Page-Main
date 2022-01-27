let hamburgerMenu = document.querySelector('#hamburger-menu');
let headerMenu = document.querySelector('.header-menu');
let headerMenuLoginRegister = document.querySelector('.header-menu-login-register');

function toggleMenu() {

    hamburgerMenu.classList.toggle('.active');

    if (hamburgerMenu.classList == '.active') {

        hamburgerMenu.style.backgroundImage = 'url(/images/icon-close.svg)';

        headerMenu.style.width = '100%';
        headerMenu.style.display = 'flex';
        headerMenu.style.flexDirection = 'row';
        headerMenu.style.flexFlow = 'wrap';
        headerMenu.style.gap = '2vw';
        headerMenu.style.position = 'absolute';
        headerMenu.style.top = '100px';
        headerMenu.style.left = '0px';
        headerMenu.style.background = 'rgba(0, 0, 0, 0.2)';
        headerMenu.style.backdropFilter = 'blur(5px)';

        headerMenuLoginRegister.style.display = 'block';

    } else {

        hamburgerMenu.style.backgroundImage = 'url(/images/icon-hamburger.svg)';
        headerMenu.style.display = 'none';
        headerLoginRegister.style.display = 'none';

    }

}

hamburgerMenu.addEventListener('click', toggleMenu);