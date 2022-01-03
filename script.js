var aud = document.getElementById("audio");
var button = document.getElementById("button");

var audio = new Audio('music_bg.mp3');
audio.volume = 0.4;
aud.addEventListener('click', e => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

