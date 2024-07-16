const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let intervalId;

const videoStarted = () => {
    intervalId = setInterval(perFrame, 33.33);
};
const videoStopped = () => {
    console.log('videoStopped');
    clearInterval(intervalId);
};

const perFrame = () => {
    canvas.width = video.offsetWidth;
    canvas.height = video.offsetHeight;
    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    ctx.font = '16px sans-serif';
    ctx.fillText(video.currentTime, 10, 30);
    console.log('perFrame running');
};

video.addEventListener('play', videoStarted);
['suspend', 'pause', 'ended'].forEach((e) => {
    video.addEventListener(e, videoStopped);
});