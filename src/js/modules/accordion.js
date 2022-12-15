const accordion = () => {
    const questions = document.querySelectorAll('.accordion-heading'),
          answer = document.querySelectorAll('.accordion-block');

    answer.forEach(a => a.classList.add('animated', 'fadeInUp'));

    hiddeAnswer();

    questions.forEach((item, i) => {
        item.addEventListener('click', () => {
            if (answer[i].style.display === 'block') {
                answer[i].style.display = 'none';
                item.style.color = '';
            } else {
                hiddeAnswer();
                answer[i].style.display = 'block';
                item.style.color = '#E950D7';
            }
        })
    });
    
    function hiddeAnswer () {
        answer.forEach(a => a.style.display = 'none');
        questions.forEach(q => q.style.color = '');
    }
}

export default accordion;