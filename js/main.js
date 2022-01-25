let iconHamburger = document.querySelector('#icon-hamburger');
let iconClose = document.querySelector('.icon-close');

let headerMenu = document.querySelector('#header-menu');
let headerRegister = document.querySelector('#header-register');

iconHamburger.addEventListener('click', openMenu);
iconClose.addEventListener('click', closeMenu);

function openMenu() {

    headerMenu.classList.toggle('active');
    headerRegister.classList.toggle('active');


    if (window.width < 768) {

        iconHamburger.style.display = 'block';
        iconClose.style.display = 'none';

    }

}

function closeMenu() {

    headerMenu.classList.toggle('active');
    headerRegister.classList.toggle('active');

    if (window.width < 768) {

        iconHamburger.style.display = 'none';
        iconClose.style.display = 'block';

    }

}

let headlineProduct = document.querySelector('#headline-product');
let headlineCompany = document.querySelector('#headline-company');
let headlineConnect = document.querySelector('#headline-connect');

function toggleContentProduct() {

    let contentProduct = document.querySelector('#content-product');

    contentProduct.classList.toggle('active');

}

function toggleContentCompany() {

    let contentCompany = document.querySelector('#content-company');

    contentCompany.classList.toggle('active');

}

function toggleContentConnect() {

    let contentConnect = document.querySelector('#content-connect');

    contentConnect.classList.toggle('active');

}

headlineProduct.addEventListener('click', toggleContentProduct);
headlineCompany.addEventListener('click', toggleContentCompany);
headlineConnect.addEventListener('click', toggleContentConnect);