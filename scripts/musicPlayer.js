export const musicPlayerInit = () => {

const audio = document.querySelector('.audio');
const audioImg = document.querySelector('.audio-img');
const audioHeader = document.querySelector('.audio-header');
const audioPlayer = document.querySelector('.audio-player');
const audioNavigation = document.querySelector('.audio-navigation');
const audioButtonPlay = document.querySelector('.audio-button__play');
const audioTimePassed = document.querySelector('.audio-time__passed');
const audioProgress = document.querySelector('.audio-progress');
const audioProgressTiming = document.querySelector('.audio-progress__timing');
const audioTimeTotal = document.querySelector('.audio-time__total');

const playlist  = ['hello', 'flow', 'speed'];

let trackIndex = 0;

audioNavigation.addEventListener('click', event => {
    const target = event.target;

    if (target.classList.contains('audio-button__play')) {
        audio.classList.toggle('play');
        audioButtonPlay.classList.toggle('fa-play');
        audioButtonPlay.classList.toggle('fa-pause');

        if (audioPlayer.paused) {
            audioPlayer.play();
        } else {
            audioPlayer.pause();
        }

        }

        if (target.classList.contains('audio-button__prev')){
            if(trackIndex !==0){
                trackIndex--;
            } else {
                trackIndex = playList.length -1;
            }
         }
        
        if (target.clasList.contains('audio-button__next')){
            if (trackIndex === playlist -1) {
                trackIndex = 0;
            } else {
                trackIndex++;
            }
        }
    });




};