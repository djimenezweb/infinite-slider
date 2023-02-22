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
const contadorElement = document.getElementById('contador');

let counter = 0;

const setRootStyles = () => {
  rootStyles.setProperty('--slide', `${-100 * counter}%`);
};

nextButton.addEventListener('click', () => {
  if (counter >= sliderElement.children.length - 1) {
    sliderElement.append(sliderElement.children[0]);
    rootStyles.setProperty('--slide', `${-100 * counter}%`);
    counter--;
    contadorElement.textContent = counter;
    return;
  }
  counter++;
  rootStyles.setProperty('--slide', `${-100 * counter}%`);
  contadorElement.textContent = counter;
});

previousButton.addEventListener('click', () => {
  counter--;
  if (counter <= 0) {
    sliderElement.prepend(sliderElement.children[sliderElement.children.length - 1]);
    counter++;
    rootStyles.setProperty('--slide', `${-100 * counter}%`);
    contadorElement.textContent = counter;
    return;
  }
  rootStyles.setProperty('--slide', `${-100 * counter}%`);
  contadorElement.textContent = counter;
});

contadorElement.textContent = counter;
