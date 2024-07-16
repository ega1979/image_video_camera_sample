const video = document.getElementById('video');

const cameraSetting = {
    audio: false,
    video: {
        width: 320,
        height: 240,
        faceingMode: 'environment'
    }
};

const cameraStart = () => {
    navigator.mediaDevices.getUserMedia(cameraSetting)
    .then((m) => {
        video.srcObject = m;
        video.play();
    });
};

const cameraStop = () => {
    video.pause();
    const tracks = video.srcObject.getTracks();
    tracks.forEach((track) => {
        track.stop();
    });
    video.srcObject = null;
};

const cameraReady = () => {
    console.log(`Camera sizes:
        width/height:       ${video.width}x${video.height}
        offsetWidth/Height: ${video.offsetWidth}x${video.offsetHeight}
        videoWidth/Height:  ${video.videoWidth}x${video.videoHeight}`);
};

cameraStart();
video.addEventListener('loadeddata', cameraReady);
video.addEventListener('pause', cameraStop);