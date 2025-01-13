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

/*=============== CHANGE BACKGROUND HEADER ===============*/


/*=============== MIXITUP FILTER PRODUCTS ===============*/


/* Default filter products */ 


/* Link active products */ 


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/