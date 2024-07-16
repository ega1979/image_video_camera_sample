let interval;
const videoEle = document.getElementById('video');

const ready = () => {
    console.log('Video loaded');
    videoEle.controls = true;
    videoEle.loop = true;
    videoEle.muted = true;
    videoEle.play();
    interval = setInterval(() => {
        let nextPos = videoEle.duration * Math.random();
        videoEle.currentTime = nextPos;
        console.log(`Skiped to ${nextPos}`);
    }, 2500);
};

const stopInterval = () => {
    clearInterval(interval);
    console.log('Shuffle stopped');
};

videoEle.addEventListener('loadeddata', ready);
videoEle.addEventListener('pause', stopInterval);
