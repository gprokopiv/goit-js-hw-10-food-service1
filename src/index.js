// import './main.css';

import menuData from './menu.json';
console.log(menuData);

// const menuRef = document.querySelector('.js-menu');

import './main.css';
import './menu.json';
import menuTemplate from './menu.hbs';


const menuRef = document.querySelector('.js-menu');
const markup = template(menuData);
menuRef.insertAdjacentHTML('afterbegin', markup);
