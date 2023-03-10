
import VimeoPlayer from "@vimeo/player"

import {throttle} from "lodash.throttle"

const iframe = document.querySelector('iframe');
const player = new VimeoPlayer(iframe);

player.on('play', function() {
    console.log('played the video!');
});

player.getVideoTitle().then(function(title) {
    console.log('title:', title);
});

player.getDuration().then(function(duration) {
    localStorage.setItem('videoDuration', duration);
  });



//   player.getCurrentTime().then(function(seconds) {
//    localStorage.setItem('videoTime', seconds);
//   });

  player.on('timeupdate', throttle(function() {
    player.getCurrentTime().then(function(seconds) {
      localStorage.setItem('videoTime', seconds);
    });
  }, 1000));

player.on('timeupdate', function(data) {
    localStorage.setItem('videoTime', data.seconds);
  });

player.on('pause', function(data) {
    player.getCurrentTime().then(function(seconds) {
        localStorage.setItem('videoTime', data.seconds)
    });
  });



  if (localStorage.getItem('videoDuration') && localStorage.getItem('videoTime')) {
    const duration = localStorage.getItem('videoDuration');
    const time = localStorage.getItem('videoTime');

    player.setCurrentTime(time).then(function() {
      player.play();
    });
  }
