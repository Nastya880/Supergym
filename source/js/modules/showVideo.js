const videoContainer = document.querySelector('[data-video-container]');
const buttonPlay = videoContainer.querySelector('[data-video-play]');

const showVideo = () => {
  buttonPlay.addEventListener('click', () => {
    videoContainer.classList.add('is-active');
  });
};

export {showVideo};
