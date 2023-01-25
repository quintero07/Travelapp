let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.add('active');
}
document.querySelector('#nav-close').onclick = () => {
    navbar.classList.remove('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');

    if(windows.scrollY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}

let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.add('active');
}
document.querySelector('#close-search').onclick = () => {
    searchForm.classList.remove('active');
}

let swiper = new Swiper('.home-slider', {
    loop: true,
    grabCursor:true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});