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
    speed: 5000,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        enabled: true
    }
});

const sl = new Swiper(slider, {
    slidesPerView: 'auto',
    loop: true,
    speed: 5000,
    slidesPerView: '2',
    autoplay: {
      enabled: true,
      delay: 5000,
    },
  });