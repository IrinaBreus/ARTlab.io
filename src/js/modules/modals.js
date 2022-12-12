import calcScroll from "./calcScroll";

const modals = () => {
    
    const scrollWidth = calcScroll();
    let pressBtn = false;

    
    const bindModal = (triggerSelector, modalSelector, closeSelector, destroy = false) => {
        const trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        closeBtn = modal.querySelector(closeSelector);
        
    
        
        modal.classList.add('animated', 'fadeIn');
        trigger.forEach(btn => {
            btn.addEventListener('click', () => {
                if (destroy) {
                    btn.remove();
                }
                openModal(modal);
                pressBtn = true;
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
        // clearInterval(showModalByTime);
        
    }

    function closeModal(modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
        document.body.style.marginRight = `0px`;
    }

    // const showModalByTime = setTimeout(() => {
    //     openModal(document.querySelector('.popup-consultation'));
    // }, 60000)

    const openByScroll = (selector) => {
        window.addEventListener('scroll', () => {

            if (!pressBtn && (window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight)) {
                document.querySelector(selector).click();
            }
        })
    }

    bindModal('.button-design', '.popup-design', '.popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-close', true);
    openByScroll('.fixed-gift');
}

export default modals;