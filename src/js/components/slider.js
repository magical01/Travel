import Swiper, { Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper('.destinations__content', {
  loop: true,
  slidesPerView: 'auto',
  pagination: {
    el: '.destinations__pagination',
    type: 'bullets',
    clickable: true,
  }
});
