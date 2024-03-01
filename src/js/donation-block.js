import Splide from "@splidejs/splide";
import '@splidejs/splide/css';

import found1 from '../img/SupportUkraine/01-found-1.png';
import found1x from '../img/SupportUkraine/01-found-2.png';
import found2 from '../img/SupportUkraine/02-found-1.png';
import found2x from '../img/SupportUkraine/02-found-2.png';
import found3 from '../img/SupportUkraine/03-found-1.png';
import found3x from '../img/SupportUkraine/03-found-2.png';
import found4 from '../img/SupportUkraine/04-found-1.png';
import found4x from '../img/SupportUkraine/04-found-2.png';
import found5 from '../img/SupportUkraine/05-found-1.png';
import found5x from '../img/SupportUkraine/05-found-2.png';
import found6 from '../img/SupportUkraine/06-found-1.png';
import found6x from '../img/SupportUkraine/06-found-2.png';
import found7 from '../img/SupportUkraine/07-found-1.png';
import found7x from '../img/SupportUkraine/07-found-2.png';
import found8 from '../img/SupportUkraine/08-found-1.png';
import found8x from '../img/SupportUkraine/08-found-2.png';
import found9 from '../img/SupportUkraine/09-found-1.png';
import found9x from '../img/SupportUkraine/09-found-2.png';
import arrow from '../img/SupportUkraine/09-found-2.png';

const charities = [
    {
      title: 'Save the Children',
      url: 'https://www.savethechildren.net/what-we-do/emergencies/ukraine-crisis',
      img: found1,
      width: 131,
      height: 32,
    },
    {
      title: 'Project HOPE',
      url: 'https://www.projecthope.org/country/ukraine/',
      img: found2,
      width: 62,
      height: 32,
    },
    {
      title: 'UNITED24',
      url: 'https://u24.gov.ua/uk',
      img: found3,
      width: 114,
      height: 32,
    },
    {
      title: 'International Medical Corps',
      url: 'https://internationalmedicalcorps.org/country/ukraine/',
      img: found4,
      width: 103,
      height: 32,
    },
    {
      title: 'Medicins Sans Frontieres',
      url: 'https://www.msf.org/ukraine',
      img: found5,
      width: 78,
      height: 32,
    },
    {
      title: 'RAZOM',
      url: 'https://www.razomforukraine.org/',
      img: found6,
      width: 82,
      height: 32,
    },
    {
      title: 'Action against hunger',
      url: 'https://www.actionagainsthunger.org/location/europe/ukraine/',
      img: found7,
      width: 55,
      height: 32,
    },
    {
      title: 'World vision',
      url: 'https://www.wvi.org/emergencies/ukraine',
      img: found8,
      width: 81,
      height: 32,
    },
    {
      title: 'Serhiy Prytula Charity Foundation',
      url: 'https://prytulafoundation.org/en',
      img: found9,
      width: 115,
      height: 32,
    },
];  

const gallery = document.querySelector('.splide__list');
let fragment = [];

charities.forEach(({ title, url, img, width, height }, index) => {
  
    const paddedIndex = (index + 1).toString().padStart(2, '0');
    const liItem = document.createElement('li');
    const aItem = document.createElement('a');
    const imgItem = document.createElement('img');
    const pItem = document.createElement('p');
    imgItem.src = img;
    imgItem.alt = title;
    imgItem.width = width;
    imgItem.height = height;
    aItem.href = url;
    pItem.textContent = paddedIndex;
    aItem.target = '_blank'
    aItem.append(imgItem);
    liItem.append(pItem);
    liItem.append(aItem);
    liItem.classList.add('splide__slide');
    liItem.classList.add('item-donation');
    aItem.classList.add('item-link-donation');
    imgItem.classList.add('item-img-donation');
    pItem.classList.add('p-num-donation')
    fragment.push(liItem);
});

gallery.append(...fragment);




const splide = new Splide('.splide', {
  direction: 'ttb',
  height: 292,
  pagination: false,
  perMove: 4,
  perPage: 6,
  gap: 20,
  fixedHeight: 32,
  arrows: false,
  speed: 800,
});

splide.mount();

let currentPage = 0;

const button = document.querySelector('.scroll-button-donations');
const svgIcon = document.querySelector('.use-svg');

button.addEventListener('click', () => {
  if (currentPage === 0) {
    splide.go(splide.length - 1, false);
    currentPage = splide.length - 1;
    svgIcon.style.transform = 'rotate(180deg)';
  } else {
    splide.go(0, false);
    currentPage = 0;
    svgIcon.style.transform = 'rotate(0deg)';
  }
});
