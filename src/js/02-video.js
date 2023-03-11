
import VimeoPlayer from "@vimeo/player"

let throttle = require('lodash.throttle');

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);


player.getDuration().then(function(duration) {
    localStorage.setItem('videoDuration', duration)
  });

  function saveToLocalStorage(data) {
    const timeRig = data.seconds;
    localStorage.setItem('curTime', timeRig);
  }
  const thrSaveToLocal = throttle(saveToLocalStorage,1000)

player.on('timeupdate',thrSaveToLocal)

if(localStorage.getItem('videoDuration') && localStorage.getItem('curTime')){
const timeBack = localStorage.getItem('curTime')
player.setCurrentTime(timeBack)
}
