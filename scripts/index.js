import {radioPlayerInit} from './radioPlayer.js';
import {musicPlayerInit} from './musicPlayer.js';
import {videoPlayerInit} from './videoPlayer.js';

const playerBtn =document.querySelectorAll('.player-btn');
const playerBlock = document.querySelectorAll('.player-block');
const temp = document.querySelector('.temp');


const deactivationPlayer = () => {
    temp.getElementsByClassName.display = 'none';
    playerBtn.forEach((item) => {item.classList.remove('active') });
    playerBlock.forEach((item) => {item.classList.remove('active') });
}

playerBtn.forEach((btn, i) => {
    console.log(btn);
    console.log(playerBlock[i]);
    btn.addEventListener ('click', () => {
        deactivationPlayer();
        btn.classList.add('active');
        playerBlock[i].classList.add('active')

    }) 
})


console.log(playerBtn);
console.log(playerBlock);
radioPlayerInit();
musicPlayerInit();
videoPlayerInit();

<link rel="icon" type="image/png" sizes="192x192" href="favicon/android-icon-192x192.png">
styleshee
t
stylesheet
stylesheet
player
player-btn player-video