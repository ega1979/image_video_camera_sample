let imgEle = document.querySelector('#imgTag');
let canvasEle = document.querySelector('#canvasTag');
let ctx = canvasEle.getContext('2d');

const showImage = () => {
    [
        'width', 'height', 
        'clientWidth', 'clientHeight',
        'offsetWidth', 'offsetHeight',
        'naturalWidth', 'naturalHeight'
    ].forEach((d) => {
        console.log(`img.${d}: ${imgEle[d]}, canvas.${d}: ${canvasEle[d]}`);
    });
    canvasEle.width = imgEle.width;
    canvasEle.height = imgEle.height;
    ctx.drawImage(imgEle, 0, 0, imgEle.width, imgEle.height);
}

imgEle.addEventListener('load', showImage());
