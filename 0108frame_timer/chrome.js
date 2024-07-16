if('requestVideoFrameCallback' in HTMLVideoElement.prototype) {
    // requestVideoFrameCallback is supported
    console.log('OK, HTMLVideoElement.requestVideoFrameCallback is supported');
} else {
    // requestVideoFrameCallback is not supported
   throw new Error('NG, HTMLVideoElement.requestVideoFrameCallback is not supported');
}

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const perFrame = () => {
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.font = '16px sans-serif';
    ctx.fillText(video.currentTime, 10, 30);
    console.log('perFrame running');
    video.requestVideoFrameCallback(perFrame);
}

video.requestVideoFrameCallback(perFrame);