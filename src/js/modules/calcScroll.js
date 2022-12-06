const calcScroll = () => {
    const box = document.createElement('div');
    box.style.cssText = `
        width: 50px;
        height: 50px;
        overflow: scroll;
        visibility: hidden;`
    document.body.append(box);

    let scrollWidth = box.offsetWidth - box.clientWidth;
    box.remove();

    return scrollWidth;
}

export default calcScroll;