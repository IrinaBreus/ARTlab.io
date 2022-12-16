const burger = () => {
    const burgerBtn = document.querySelector('.burger'),
          burgerMenu = document.querySelector('.burger-menu');

    burgerMenu.style.display = 'none';

    burgerBtn.addEventListener('click', () => {
        if (burgerMenu.style.display === 'none' && window.screen.availWidth < 993) {
            burgerMenu.style.display = 'block';
        } else {
            burgerMenu.style.display = 'none';
        }
    })

    window.addEventListener('resize', () => {
        if (window.screen.availWidth > 992) {
            burgerMenu.style.display = 'none';
        }
    })
}

export default burger;