import Swiper from 'swiper/bundle';

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,  // Ensure pagination bullets are clickable if needed
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    autoplay: {
      delay: 2500, 
      disableOnInteraction: false,
    },
    speed: 1000,  // Speed of transitions in ms
  });
});