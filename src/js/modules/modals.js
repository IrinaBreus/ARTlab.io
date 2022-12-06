import calcScroll from "./calcScroll";

const modals = () => {
    
    const scrollWidth = calcScroll();
    
    const bindModal = (triggerSelector, modalSelector, closeSelector) => {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              closeBtn = modal.querySelector(closeSelector);
        
    
        trigger.forEach(btn => {
            btn.addEventListener('click', () => {
                if (modal.classList.contains('popup-gift')) {
                    btn.remove();
                }
                openModal(modal);
            })
        })
    
        closeBtn.addEventListener('click', () => {
            closeModal(modal);
        })
    
        document.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal(modal);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modal.style.display === 'block') {
                closeModal(modal);
            }
        })

    }
    
    function openModal(modal) {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = `${scrollWidth}px`;
        clearInterval(showModalByTime);
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`
    }

    const showModalByTime = setTimeout(() => {
        openModal(document.querySelector('.popup-consultation'));
    }, 60000)

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close');
}

export default modals;