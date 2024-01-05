import Swiper from '../vendor/swiper';

const initSwiperFeedback = () => {
  const swiper = new Swiper('[data-swiper="feedback"]', {
  //   loop: false,
    spaceBetween: 20,
    navigation: {
      nextEl: '[data-swiper-feedback-button="next"]',
      prevEl: '[data-swiper-feedback-button="prev"]',
    },
    // mousewheel: true,
    keyboard: true,
  });

  return swiper;
};

export {initSwiperFeedback};
