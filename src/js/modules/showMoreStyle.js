import { getResource } from "../services/requests";

const showMoreStyle = () => {
    const btn = document.querySelector('.button-styles'),
          wrapper = document.querySelector('#styles .row');

    
    btn.addEventListener('click', () => {
        getResource('assets/db.json')
            .then(res => createCard(res.styles))
            .catch(error => console.log(error));

        btn.remove();
    });

    function createCard(response) {
        response.forEach(({src, title, link}) => {
            let card = document.createElement('div');
            card.classList.add('animated', 'fadeInUp', 'col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1');
            card.innerHTML = `
                <div class=styles-block>
                    <img src=${src} alt=${title}>
                    <h4>${title}</h4>
                    <a href=${link}>Подробнее</a>
                </div>
            `;

            wrapper.append(card);
        })
    }
}

export default showMoreStyle;