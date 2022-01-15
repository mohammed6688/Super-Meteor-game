import Game from "./game.js";

var button = document.getElementById("button");

var settings = document.getElementById("img_setting")
var sub_menu = document.getElementById("audioDiv")
var mainMusic = document.getElementById("mainMusic")
var slider_song1 = document.getElementById("song1")
var img_song1 = document.getElementById("img_unmute1")
var score = document.getElementById("score");
var maxScore = document.getElementById("maxScore");
var back = document.getElementById("back");
var pauseMenu =document.getElementById("neon-wrapper");
let heart1 = document.getElementById("img_heart1");
let heart2 = document.getElementById("img_heart2");
let heart3 = document.getElementById("img_heart3");
const heartImages = [heart1, heart2, heart3];


var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

var resume = document.getElementById("resume");
var gameOver = document.getElementById("gameOver");
var wrapper = document.getElementById("wrapper");


var medium = document.getElementById("medium");
var exit = document.getElementById("exit");

let title = document.getElementById("title");
let diffContainer = document.getElementById("diffContainer");
let gameContainer = document.getElementById("game");


export function heartHandling(numberOfLives) {

    let i;
    for (i = 0; i < numberOfLives; i++) {
        heartImages[i].style.display = "inline-block";
    }
    for (; i < 3; i++) {
        //heartImages[i].src = "empty_heart.png";
        heartImages[i].style.display = "none";

    }
}


gameContainer.style.display = "none";
document.getElementById("neon-wrapper").style.display = "none";
document.getElementById("score").style.display = "none";
document.getElementById("gameOver").style.display = "none";




let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// let ratio = 1.5;
// canvas.height =canvas.width *ratio;
const GAME_WIDTH = window.innerWidth;
const GAME_HEIGHT = window.innerHeight;
// const GAME_HEIGHT =GAME_WIDTH*ratio;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);
//game.start();
resume.addEventListener('click', e => {
    game.togglePause();
});

exit.addEventListener('click', e => {
    window.open("index.html", "_self");
});
gameOver.addEventListener('click', e => {
    game.audio.mainPause();
    game = new Game(GAME_WIDTH, GAME_HEIGHT);
});
easy.addEventListener('click', e => {
    window.localStorage.setItem("level", 0);
    gameContainer.style.display = "block";
    diffContainer.style.display = "none";
    title.style.display = "none";
    if(game.gameState==0){
        game=  new Game(GAME_WIDTH, GAME_HEIGHT);
    }
});

medium.addEventListener('click', e => {
    window.localStorage.setItem("level", 1);
    gameContainer.style.display = "block";
    diffContainer.style.display = "none";
    title.style.display = "none";
    if(game.gameState==0){
        game=  new Game(GAME_WIDTH, GAME_HEIGHT);
    }
});
hard.addEventListener('click', e => {
    window.localStorage.setItem("level", 2);
    gameContainer.style.display = "block";
    diffContainer.style.display = "none";
    title.style.display = "none";
    if(game.gameState==0){
        game=  new Game(GAME_WIDTH, GAME_HEIGHT);
    }
});

let lastTime = 0;

function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;
    //console.log(timestamp)
    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx)
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);






// let maxS = JSON.parse(localStorage.getItem("maxScore"));
// if(maxS!=null){
//     maxScore.textContent="Max Score \n"+ maxS;
// }


slider_song1.value = JSON.parse(localStorage.getItem('sliderVal'))
localStorage.setItem('pre_sliderVal', slider_song1.value)
if (slider_song1.value == 0) {
    img_song1.setAttribute('src', 'assets/mute.png')
}
else {
    img_song1.setAttribute('src', 'assets/voice.png')
}

var flag_mute_unmute = 1;
mainMusic.autoplay = true
mainMusic.loop = true
button.addEventListener('click', e => {
    wrapper.style.display = "none"
    title.style.display = "block"
    diffContainer.style.display = "block"
    back.style.display = "block"
});

back.addEventListener('click', e => {
    if (wrapper.style.display === "none" && gameContainer.style.display === "none") {//at level chooser
        back.style.display = "none";
        wrapper.style.display = "flex";

        title.style.display = "none"
        diffContainer.style.display = "none"
        console.log("yes");
    } else {
        wrapper.style.display = "none"
        title.style.display = "block"
        diffContainer.style.display = "block"
        back.style.display = "block"
        score.style.display = "none"
        gameOver.style.display = "none"
        gameContainer.style.display = "none";
        pauseMenu.style.display="none";

        game.gameState=0;
    }

});

settings.addEventListener('click', e => {

    if (sub_menu.style.display === "block") {
        sub_menu.style.display = "none";

    } else {
        sub_menu.style.display = "block";

    }

});

slider_song1.addEventListener('change', e => {
    var val = e.target.value;
    mainMusic.volume = val / 100;
    localStorage.setItem('sliderVal', val)
    if (val == 0) {
        img_song1.setAttribute('src', 'assets/mute.png')
        flag_mute_unmute = 0;
    }
    else {
        img_song1.setAttribute('src', 'assets/voice.png')
        flag_mute_unmute = 1;
    }

});

img_song1.addEventListener('click', e => {

    if (JSON.parse(localStorage.getItem('sliderVal')) == 0 && JSON.parse(localStorage.getItem('pre_sliderVal')) != 0) {
        img_song1.setAttribute('src', 'assets/mute.png')
        localStorage.setItem('pre_sliderVal', slider_song1.value)
        localStorage.setItem('sliderVal', 0)
        slider_song1.value = 0;
        flag_mute_unmute = 0;
    }
    else {
        img_song1.setAttribute('src', 'assets/voice.png')
        slider_song1.value = JSON.parse(localStorage.getItem('pre_sliderVal'));
        localStorage.setItem('pre_sliderVal', 0)
        localStorage.setItem('sliderVal', slider_song1.value)
        flag_mute_unmute = 1;
    }

});

