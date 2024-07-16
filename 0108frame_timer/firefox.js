if('seekToNextFrame' in HTMLVideoElement.prototype) {
  console.log('OK, HTMLVideoElement.seekToNextFrame is supported');
} else {
  throw new Error('NG, HTMLVideoElement.seekToNextFrame is not supported');
}

const perFrame = () => {
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;

    setInterval(() => {
        video.seekToNextFrame()
        .then(() => {
            ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
            ctx.font = '16px sans-serif';
            ctx.fillText(video.currentTime, 10, 30);
        });
    }, 33.33); // 33 ms = (1000 ms / 30 fps);
    console.log('perFrame running');
}

video.addEventListener('loadeddata', perFrame);