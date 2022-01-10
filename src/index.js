import Game from "./game.js";

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


