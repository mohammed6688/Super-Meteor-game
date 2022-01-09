import Game from "./game.js";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const GAME_WIDTH =window.innerWidth;
const GAME_HEIGHT =window.innerHeight;

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


