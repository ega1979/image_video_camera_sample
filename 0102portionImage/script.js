const imgEle = document.querySelector('#imgTag');
const canvasEle1 = document.querySelector('#canvasTag1');
const ctx1 = canvasEle1.getContext('2d');
const canvasEle2 = document.querySelector('#canvasTag2');
const ctx2 = canvasEle2.getContext('2d');

let [x_img, y_img, w_img, h_img] = [470, 377, 268, 248];

const showImage = () => {
    console.log('Image loaded:', imgEle.complete);

    canvasEle1.width = w_img;
    canvasEle1.height = h_img;
    ctx1.drawImage(imgEle,
        x_img, y_img, w_img, h_img,
        0, 0, w_img, h_img
    );

    canvasEle2.width = Math.floor(w_img / 2);
    canvasEle2.height = Math.floor(h_img / 2);
    ctx2.drawImage(imgEle,
        x_img, y_img, w_img, h_img,
        0, 0, canvasEle2.width, canvasEle2.height
    );

    console.log('Canvas1 drawn:', ctx1);
    console.log('Canvas2 drawn:', ctx2);
}

imgEle.addEventListener('load', showImage());