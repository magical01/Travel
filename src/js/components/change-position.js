const header = document?.querySelector('.header');
const hero = document?.querySelector('.hero');
const closeBtn = document?.querySelector('.graph-modal__close');
const overlay = document?.querySelector('.graph-modal');

window.addEventListener('click', (e) => {
  let height = header.offsetHeight;
  if (e.target.classList.contains('header__login')) {
    header.style.position = 'relative';
    hero.style.top = `-${height}px`;
  }

  if (e.target.classList.contains('graph-modal__close')) {
    header.style.position = 'absolute';
    hero.style.top = `0px`;
  }

  if (e.target.classList.contains('graph-modal')) {
    header.style.position = 'absolute';
    hero.style.top = `0px`;
  }
})

