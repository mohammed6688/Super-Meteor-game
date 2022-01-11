var aud = document.getElementById("audio");
var button = document.getElementById("button");
var setting = document.getElementById("setting");


var audio = new Audio('assets/main_sound.mp3');
audio.volume = 0.4;
aud.addEventListener('click', e => {
    if (audio.paused) {
        audio.play();
        localStorage.setItem("audioFlag" , 1);
    } else {
        audio.pause();
        localStorage.setItem("audioFlag" , 0);
    }
});

button.addEventListener('click', e => {
    //console.log("clicked");
    window.open("index2.html", "_self");

});

setting.addEventListener('click', e => {
    window.open("setting.html", "_self");
});