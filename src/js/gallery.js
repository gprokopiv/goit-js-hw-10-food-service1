import menu from './menu.json';
import cardsTmpl from '../template/cards.hbs';

const menuRef = document.querySelector('.js-menu');

const cardsMarkup = cardsTmpl(menu);
menuRef.insertAdjacentHTML('afterbegin', cardsMarkup);

// function createMenuCardsMarkup(menu) {
//     // return menu.map(cardsTmpl), join('');
//     return cardsTmpl(menu);

// }

