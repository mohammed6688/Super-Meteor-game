import Game from "./game.js";

let heart1 = document.getElementById("img_heart1");
let heart2 = document.getElementById("img_heart2");
let heart3 = document.getElementById("img_heart3");
const heartImages = [heart1, heart2, heart3];
export function heartHandling(numberOfLives) {

    let i;
    for(i=0; i<numberOfLives; i++){
        heartImages[i].style.display = "inline-block";
    }
    for(; i<3; i++){
        heartImages[i].style.display = "none";
    }
}

var easy = document.getElementById("easy");
var medium = document.getElementById("medium");
var hard = document.getElementById("hard");

var resume = document.getElementById("resume");
var gameOver = document.getElementById("gameOver");

var medium = document.getElementById("medium");
var exit = document.getElementById("exit");

let title = document.getElementById("title");
let diffContainer = document.getElementById("diffContainer");
let gameContainer = document.getElementById("game");


gameContainer.style.display="none";
document.getElementById("neon-wrapper").style.display="none";
document.getElementById("score").style.display="none";
document.getElementById("gameOver").style.display="none";


// diffContainer.style.display="none";
// title.style.display="none";

// showhide("diffContainer")
// showhide("title")
//diffContainer.style.animation = 'fading 2s infinite'

// unfade(body);


easy.addEventListener('click', e => {
    //put code her
    window.localStorage.setItem("level",0);
    gameContainer.style.display="block";
    diffContainer.style.display="none";
    title.style.display="none";
});
easy.addEventListener('click', e => {
    //put code her
    window.localStorage.setItem("level",0);
    gameContainer.style.display="block";
    diffContainer.style.display="none";
    title.style.display="none";
});
medium.addEventListener('click', e => {
    //put code here
    //window.localStorage.setItem("level","medium");
    window.localStorage.setItem("level",1);
    gameContainer.style.display="block";
    diffContainer.style.display="none";
    title.style.display="none";
});
hard.addEventListener('click', e => {
    //put code here
    window.localStorage.setItem("level",2);
    gameContainer.style.display="block";
    diffContainer.style.display="none";
    title.style.display="none";
});


let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// let ratio = 1.5;
// canvas.height =canvas.width *ratio;
const GAME_WIDTH =window.innerWidth;
const GAME_HEIGHT =window.innerHeight;
// const GAME_HEIGHT =GAME_WIDTH*ratio;


let game = new Game(GAME_WIDTH,GAME_HEIGHT);
//game.start();
resume.addEventListener('click', e => {
   game.togglePause();
});

exit.addEventListener('click', e => {
    window.open("index.html", "_self");
 });
gameOver.addEventListener('click', e => {
    game.audio.mainPause();
    game= new Game(GAME_WIDTH,GAME_HEIGHT);
 });


let lastTime=0;

function gameLoop(timestamp){
    let deltaTime=timestamp - lastTime;
    lastTime=timestamp;
    //console.log(timestamp)
    ctx.clearRect(0,0,GAME_WIDTH,GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx)
    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);

function showhide(id) {
    if (document.getElementById) {
      var divid = document.getElementById(id);
      var divs = document.getElementsByClassName("hideable");
      for (var i = 0; i < divs.length; i = i + 1) {
        $(divs[i]).fadeOut("slow");
      }
      $(divid).fadeIn("slow");
    }
    return false;
  }

function fade(element) {
    var op = 1;  // initial opacity
    var timer = setInterval(function () {
        if (op <= 0.1){
            clearInterval(timer);
            element.style.display = 'none';
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op -= op * 0.1;
    }, 50);
}

function unfade(element) {
    var op = 0.1;  // initial opacity
    element.style.display = 'block';
    var timer = setInterval(function () {
        if (op >= 1){
            clearInterval(timer);
        }
        element.style.opacity = op;
        element.style.filter = 'alpha(opacity=' + op * 100 + ")";
        op += op * 0.1;
    }, 10);
}

