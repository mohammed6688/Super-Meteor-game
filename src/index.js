<<<<<<< HEAD
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


=======
import Game from './game.js';
// import InputHandler from './input.js';

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext('2d');

const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;


let game = new Game(GAME_WIDTH, GAME_HEIGHT);


// let paddle = new Paddle(GAME_WIDTH, GAME_HEIGHT);
// paddle.draw(ctx);

// new InputHandler(paddle);



let lastTime = 0;



// Images 
// let imgBall = document.getElementById('img_ball');



function gameLoop(timestamp) {
    let deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);
    game.update(deltaTime);
    game.draw(ctx);



    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);
>>>>>>> 5e73684399bde4e266a02ef6951c384c37bfcd03
