import Swiper from '../vendor/swiper';

const initSwiperTrainers = () => {
  const swiper = new Swiper('[data-swiper="trainers"]', {
    loop: true,

    navigation: {
      nextEl: '[data-swiper-trainers-button="next"]',
      prevEl: '[data-swiper-trainers-button="prev"]',
    },

    breakpoints: {
      1366: {
        allowTouchMove: false,
        slidesPerView: 4,
        spaceBetween: 40,
      },

      768: {
        allowTouchMove: true,
        slidesPerView: 2,
        spaceBetween: 32,
      },

      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
    },
  });

  return swiper;
};

export {initSwiperTrainers};
