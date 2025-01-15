const navMenu = document.getElementById('nav-menu');
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
/*=============== LOADER ===============*/


/*=============== SHOW MENU ===============*/
if(navToggle) {
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.toggle('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', ()=> {
        navMenu.classList.toggle('show-menu');
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
function linkAction() {
    navMenu.classList.toggle('show-menu')
}

navLink.forEach(link => link.addEventListener('click', linkAction));

/*=============== NAVBAR FIXED ===============*/
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav) {
        header.classList.add('navbar-fixed');
    } else {
        header.classList.remove('navbar-fixed');
    }
}

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== MIXITUP FILTER PRODUCTS ===============*/
var mixerProducts = mixitup(".products-content", {
    selectors: {
        target: '.products-card'
    },
    animation: {
        duration: 300
    }
});

/* Default filter products */ 
mixerProducts.filter('.delicacies');

/* Link active products */ 
const productsList = document.querySelectorAll('.products-item');

function activeProduct() {
    productsList.forEach(pl => pl.classList.remove('active-product'));
    this.classList.add('active-product');
}

productsList.forEach(pl => pl.addEventListener('click', activeProduct));

/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/