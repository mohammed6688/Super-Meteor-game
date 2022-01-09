var aud = document.getElementById("audio");
var button = document.getElementById("button");
var setting = document.getElementById("setting");


var audio = new Audio('assets/music_bg.mp3');
audio.volume = 0.4;
aud.addEventListener('click', e => {
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

button.addEventListener('click', e => {
    //console.log("clicked");
    window.open("index2.html", "_self");

});

setting.addEventListener('click', e => {
    window.open("setting.html", "_self");
});