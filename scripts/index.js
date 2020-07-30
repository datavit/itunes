import {radioPlayerInit} from './radioPlayer.js';
import {musicPlayerInit} from './musicPlayer.js';
import {videoPlayerInit} from './videoPlayer.js';

const playerBtn =document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');

playerBtn.forEach((btn) => {
    btn.addEventListener ('click', () => {

    }) 
})


console.log(playerBtn);
console.log(playerBlock);
radioPlayerInit();
musicPlayerInit();
videoPlayerInit();