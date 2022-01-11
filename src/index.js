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


