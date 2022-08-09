import throttle from 'lodash.throttle';
import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(getPauseTime, 1000));
function getPauseTime({ seconds }) {
    localStorage.setItem('videoplayer-current-time', seconds);
}

const startTime = localStorage.getItem('videoplayer-current-time');
console.log(startTime);

player.setCurrentTime(startTime);
