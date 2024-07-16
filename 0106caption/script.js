const video = document.getElementById('video');
const track = document.getElementById('track');

const showCue = (e) => {
    const trackObj = e.target.track;
    const cueList = trackObj.activeCues;

    if(cueList.length > 0){
        console.log(`${video.currentTime} ${cueList[0].text}`);
    } else {
        console.log(`${video.currentTime} Cue changed but no cue`);
    }
};

track.addEventListener('cuechange', showCue);
