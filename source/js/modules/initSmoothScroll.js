const introButton = document.querySelector('[data-button="intro"]');
const sectionTickets = document.querySelector('[data-tickets]');

const smoothScroll = (buttonForScroll, sectionResult) => {
  buttonForScroll.addEventListener('click', function (e) {
    e.preventDefault();

    sectionResult.scrollIntoView({
      behavior: 'smooth',
    });
  });
};

export {smoothScroll, introButton, sectionTickets};
