const sizePicture = () => {
    const sizesBlock = document.querySelectorAll('.sizes-block');

    sizesBlock.forEach(block => {
        
        block.addEventListener('mouseenter', () => {
            createImg(block);
        })

        block.addEventListener('mouseleave', () => {
            block.lastElementChild.remove();
        })
    })

    function createImg(elem) {
        const path = elem.querySelector('img').getAttribute('src');
        const img = document.createElement('img');
        img.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            z-index: 10
        `;
        img.src = path.replace(/(\.png)/, '-1.png');
        elem.append(img);
    }
}

export default sizePicture;