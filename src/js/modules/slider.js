const slider = (selector, direction, prev, next) => {
    const slides = document.querySelectorAll(selector);

    let count = 0,
        paused = false;

    showSlides(count);
    activateAnimation();

    try {
        const prevBtn = document.querySelector(prev),
              nextBtn = document.querySelector(next);

        prevBtn.addEventListener('click', () => {
            plusSlide(-1);
            slides[count].classList.remove('slideInLeft');
            slides[count].classList.add('slideInRight');
        })

        nextBtn.addEventListener('click', () => {
            plusSlide(1);
            slides[count].classList.remove('slideInRight');
            slides[count].classList.add('slideInLeft');
        })
    } catch (e) {}

    slides[0].parentNode.addEventListener('mouseenter', () => {
        clearInterval(paused);
    });

    slides[0].parentNode.addEventListener('mouseleave', () => {
        activateAnimation();
    });

    function activateAnimation() {
        if (direction == 'vertical') {
            paused = setInterval(() => {
                plusSlide(1);
                slides[count].classList.add('slideInDown');
            }, 3000)
        } else {
            paused = setInterval(() => {
                plusSlide(1);
                slides[count].classList.remove('slideInRight');
                slides[count].classList.add('slideInLeft');
            }, 3000)
        }
    }

    function showSlides(n) {

        if (n == slides.length) {
            count = 0;
        }

        if (n < 0) {
            count = slides.length - 1;
        }

        slides.forEach(slide => {
            slide.classList.add('animated');
            slide.style.display = 'none';
        })
    
        slides[count].style.display = 'block';
    }

    function plusSlide(n) {
        showSlides(count += n);
    }
    
}

export default slider;