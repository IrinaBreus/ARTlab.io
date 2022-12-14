import filter from "./modules/filter";
import modals from "./modules/modals";
import sizePicture from "./modules/sizePicture";
import slider from "./modules/slider";

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modals();
    
    slider('.main-slider-item', 'vertical');
    slider('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');

    filter();

    sizePicture();
})