import { postData } from "../services/requests";

const forms = () => {
    const formsAll = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'),
          textareas = document.querySelectorAll('textarea'),
          upload = document.querySelectorAll('[name="upload"]');

    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Мы скоро с Вами свяжемся',
        failure: 'Упс... Что-то пошло не так',
        spinner: 'assets/img/spinner.gif',
        ok: 'assets/img/ok.png',
        fail: 'assets/img/fail.png'
    }

    const path = {
        designer: 'assets/server.php',
        questions: 'assets/questions.php'
    }


    upload.forEach(item => {
        item.addEventListener('input', () => {
            let dots;
            const arr = item.files[0].name.split('.');
            arr[0].length > 6 ? dots = '...' : dots = '.';
            const name = arr[0].substring(0, 6) + dots + arr[1];
            item.previousElementSibling.textContent = name;
        })
    })

    formsAll.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            form.parentNode.append(statusMessage);

            form.classList.add('animated', 'fadeOutUp');
            setTimeout(() => {
                form.style.display = 'none';
            }, 400)

            let statusImg = document.createElement('img');
            statusImg.setAttribute('src', message.spinner);
            statusImg.classList.add('animated', 'fadeInUp');
            statusMessage.appendChild(statusImg);

            let textMessage = document.createElement('div');
            textMessage.textContent = message.loading;
            statusMessage.append(textMessage);


            const formData = new FormData(form);

            let api;
            form.closest('.popup-design') || form.classList.contains('calc_form') ? api = path.designer : api = path.questions;
            console.log(api);


            postData(api, formData)
                .then(res => {
                    console.log(res);
                    statusImg.setAttribute('src', message.ok);
                    textMessage.textContent = message.success;
                })
                .catch(() => {
                    statusImg.setAttribute('src', message.fail);
                    textMessage.textContent = message.failure;
                })
                .finally(() => {
                    setTimeout(() => {
                        statusMessage.remove();
                        form.style.display = 'block';
                        form.classList.remove('fadeOutUp');
                        document.querySelectorAll('[data-modal]').forEach(modal => modal.style.display = 'none');
                        document.body.style.overflow = '';
                        inputs.forEach(input => {
                            input.value = '';
                        });
                        textareas.forEach(textarea => {
                            textarea.value = '';
                        });
                        upload.forEach(item => item.previousElementSibling.textContent = 'Файл не выбран');
                    }, 3000);
                })
        })
    })
}

export default forms;