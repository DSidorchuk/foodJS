import modal from "./modules/modal";
import tabs from "./modules/tabs";
import slider from "./modules/slider";
import timer from "./modules/timer";
import calculator from "./modules/calculator";
import {Menu} from "./modules/menu";
import form from "./modules/form";

'use strict'

window.addEventListener('DOMContentLoaded', () => {
    const menuContainer = document.querySelector('.menu__field .container'),
          forms = document.querySelectorAll('form');


    modal('.modal', '.modal__close', '[modal]');
    tabs('.tabheader__item', '.tabcontent', 'tabheader__item_active');
    slider('#current', '#total', '.offer__slider-next', '.offer__slider-prev', '.offer__slide');
    timer('2022-12-31');
    calculator();

    new Menu('././img/tabs/vegy.jpg', 'vegy', 'Меню "Фитнес"','Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 229).render(menuContainer);
    new Menu('././img/tabs/elite.jpg', 'elite', 'Меню “Премиум”','В меню “Премиум” мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!', 550).render(menuContainer);
    new Menu('././img/tabs/post.jpg', 'post', 'Меню "Постное"','Меню “Постное” - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.', 430).render(menuContainer);
    
    form('http://localhost:3000/users', forms);

});

