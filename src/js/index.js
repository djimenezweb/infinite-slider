// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';
/* import CatImage from '../assets/images/anubis.jpg';
import { sayHello } from './demo.js';

sayHello();

const img = document.createElement('img');
img.src = CatImage;
document.body.append(img); */

const rootStyles = document.documentElement.style;
const previousButton = document.getElementById('previous');
const nextButton = document.getElementById('next');
const sliderElement = document.getElementById('slider');

let direction;

// NEXT PICTURE
nextButton.addEventListener('click', () => {
  rootStyles.setProperty('--slide', '-300%');
  direction = 1;
});

// PREVIOUS PICTURE
previousButton.addEventListener('click', () => {
  rootStyles.setProperty('--slide', '-100%');
  direction = -1;
});

sliderElement.addEventListener('transitionend', () => {
  direction === 1 ? sliderElement.append(sliderElement.firstElementChild) : sliderElement.prepend(sliderElement.lastElementChild);
  rootStyles.setProperty('--transition', 'none');
  rootStyles.setProperty('--slide', '-200%');
  setTimeout(() => {
    rootStyles.setProperty('--transition', 'transform 400ms ease-in-out');
  });
});
