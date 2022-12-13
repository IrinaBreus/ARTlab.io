const filter = () => {
    const menu = document.querySelector('.portfolio-menu'),
          menuItem = menu.querySelectorAll('li'),
          content = document.querySelector('.portfolio-wrapper'),
          all = content.querySelectorAll('.all'),
          lovers = content.querySelectorAll('.lovers'),
          chef = content.querySelectorAll('.chef'),
          girl = content.querySelectorAll('.girl'),
          guy = content.querySelectorAll('.guy'),
          portfoliNo = document.querySelectorAll('.container > .portfolio-no');

    menu.addEventListener('click', (e) => {
        const target = e.target.className;

        switch (target) {
            case 'all' :
                showContent(all, target);
                break;
            case 'lovers':
                showContent(lovers, target);
                break;
            case 'chef':
                showContent(chef, target);
                break;
            case 'girl':
                showContent(girl, target);
                break;
            case 'guy' :
                showContent(guy, target);
                break;
            case 'grandmother':
            case 'granddad':
                showContent(portfoliNo, target);
                break;
        }
    })
    
    function showContent(name, e) {
        all.forEach(item => {
            item.style.display = 'none';
            item.classList.remove('animated', 'fadeIn');
        });
        portfoliNo.forEach(p => {
            p.style.display = 'none';
            p.classList.remove('animated', 'fadeIn');
        });

        name.forEach(item => {
            item.style.display = 'block';
            item.classList.add('animated', 'fadeIn');
        });
        menuItem.forEach(item => {
            item.classList.remove('active');
            if (item.classList.contains(e)) {
                item.classList.add('active');
            }
        })
    }
}

export default filter;