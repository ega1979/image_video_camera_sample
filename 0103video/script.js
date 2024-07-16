const startTime = new Date().getTime();
const videoEle = document.getElementById('video');

const showMetaData = (e) => {
    console.log(`Video Properties:
            Size offset: ${videoEle.offsetWidth} x ${videoEle.offsetHeight}
            Size (element): ${videoEle.width} x ${videoEle.height}
            Size video: ${videoEle.videoWidth} x ${videoEle.videoHeight}
            Duration: ${videoEle.duration}s
            CurrentTime: ${videoEle.currentTime}s
            Volume: ${videoEle.volume} [0, 1]
            Play rate: ${videoEle.playbackRate}
            Loop: ${videoEle.loop}`
        );
};

const events = [
    'ended',
    'error',
    'loadeddata',
    'loadedmetadata',
    'loadstart',
    'pause',
    'play',
    'seeked',
    'seeking',
    'sasuspend',
    'volumechange'
];

events.forEach((e) => {
    videoEle.addEventListener(e, ()=> {
        const delta = (Date.now() - startTime).toLocaleString();
        console.log(`[${delta}]. event: ${e}`);
    });
});

videoEle.addEventListener('load', showMetaData());
