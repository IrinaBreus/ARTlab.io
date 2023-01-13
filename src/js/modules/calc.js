const calc = (state) => {
    const price = document.querySelector('.calc-price'),
          size = document.querySelector('#size'),
          material = document.querySelector('#material'),
          options = document.querySelector('#options'),
          promo = document.querySelector('.promocode');

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+size.value) * (+material.value) + (+options.value));
        
        if (size.value == '' || material.value == '') {
            price.textContent = 'Пожалуйста выберите размер и материал картины';
        } else if (promo.value == 'IWANTPOPART') {
            price.textContent = Math.round(sum * 0.7);
        } else {
            price.textContent = sum;
        }
        state['size'] = size[size.selectedIndex].text;
        material.selectedIndex == 0 ? state['material'] = 'не выбран' : state['material'] = material[material.selectedIndex].text;
        options.selectedIndex == 0 ? state['options'] = 'нет' : state['options'] = options[options.selectedIndex].text;
        promo.value == 'IWANTPOPART' ? state['promo'] = true : state['promo'] = false;
    }
    

    size.addEventListener('change', calcFunc);
    material.addEventListener('change', calcFunc);
    options.addEventListener('change', calcFunc);
    promo.addEventListener('input', calcFunc);

    
}

export default calc;