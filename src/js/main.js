import accordion from "./modules/accordion";
import burger from "./modules/burger";
import calc from "./modules/calc";
import checkTextInputs from "./modules/checkTextInputs";
import filter from "./modules/filter";
import forms from "./modules/forms";
import mask from "./modules/mask";
import modals from "./modules/modals";
import scrolling from "./modules/scrolling";
import showMoreStyle from "./modules/showMoreStyle";
import sizePicture from "./modules/sizePicture";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    let state = {};

    modals();
    
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');

    filter();

    sizePicture();

    accordion();
    burger();
    scrolling('.pageup');

    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    forms(state);

    showMoreStyle();

    calc(state);

})