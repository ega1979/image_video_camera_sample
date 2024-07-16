const sheetsize = {width: 4, height: 3};
const imgWidth = 128;
let imgHeight;
let count = 0;
let timeSeries;

const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const prepare = () => {
    
    const aspect = video.videoHeight / video.videoWidth;
    imgHeight = Math.floor(imgWidth * aspect);
    canvas.width = imgWidth * sheetsize.width;
    canvas.height = imgHeight * sheetsize.height;

    const number = sheetsize.width * sheetsize.height;
    const interval = video.duration / number;
    timeSeries = [...Array(number).keys()].map(i => i * interval);

    video.muted = true;
    video.play();
};

const pasteFrame = () => {
    const pos_x = (count % sheetsize.width) * imgWidth;
    const pos_y = Math.floor(count / sheetsize.width) * imgHeight;
    ctx.drawImage(video, pos_x, pos_y, imgWidth, imgHeight);
};

const timeUpdated = () => {
    if(video.currentTime > timeSeries[count]){
        console.log(`${count} at ${video.currentTime}`);
        pasteFrame();
        count++;
    }
}

video.addEventListener('loadedmetadata', prepare);
video.addEventListener('timeupdate', timeUpdated);
