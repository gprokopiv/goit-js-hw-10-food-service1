import './main.css';
import menu from './menu.json';
import cardsTmpl from './cards.hbs';
import './switch-toggle.js';

const menuRef = document.querySelector('.js-menu');
const cardsMarkUp = cardsTmpl(menu);

menuRef.insertAdjacentHTML('afterbegin', cardsMarkUp);

// function createMenuCardsMarkup(menu) {
//     // return menu.map(cardsTmpl), join('');
//     return cardsTmpl(menu);;

// }

