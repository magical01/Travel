import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.destinations__content', {
  loop: true,
  slidesPerView: 'auto',
  spaceBetween: 60,
  pagination: {
    el: '.destinations__pagination',
    type: 'bullets',
    clickable: true,
  }
});
