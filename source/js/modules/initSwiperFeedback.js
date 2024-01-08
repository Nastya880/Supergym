import Swiper from '../vendor/swiper';

const initSwiperFeedback = () => {
  const swiper = new Swiper('[data-swiper="feedback"]', {
    spaceBetween: 20,

    navigation: {
      nextEl: '[data-swiper-feedback-button="next"]',
      prevEl: '[data-swiper-feedback-button="prev"]',
    },

    keyboard: true,
  });

  return swiper;
};

export {initSwiperFeedback};
