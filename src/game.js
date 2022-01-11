import Paddle from "./Paddle.js"
import InputHandler from "./input.js";
import Ball from "./ball.js";
import {level1,level2,level3, buildLevel} from "./levels.js";
import {heartHandling} from "/src/index.js"

const GAMESTATE = {
    PAUSE: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL:4
}
export default class Game {
    constructor(gameWidth, gameHeight) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle, this);
        this.gameObject = [];
        this.brick = [];
        this.levels = [level1,level2,level3];
        this.currentLevel= localStorage.getItem("level");
        if(this.currentLevel == null)this.currentLevel = 0;
        console.log(this.currentLevel)
        this.lives=3;
        heartHandling(0);
        this.currentScore=0;
        this.maxScore=0;
        this.audio = new Audio('assets/main_sound.mp3');

    }

    start() {
        if (
            this.gameState!==GAMESTATE.MENU &&
            this.gameState!==GAMESTATE.NEWLEVEL
        )
            return;

        this.brick = buildLevel(this, this.levels[this.currentLevel]); //return array of objects of bricks
        this.gameObject = [this.ball, this.paddle];
        this.gameState=GAMESTATE.RUNNING;
        this.ball.reset();

        this.audio.volume = 0.4;
        this.audio.loop=true;
        this.audio.play().then(r => console.log("played"));

        heartHandling(this.lives);
    }

    togglePause() {
        if (this.gameState === GAMESTATE.PAUSE) {
            this.gameState = GAMESTATE.RUNNING;
        } else {
            this.gameState = GAMESTATE.PAUSE;
        }


    }

    update(deltaTime) {
        if (this.lives===0)this.gameState=GAMESTATE.GAMEOVER;
        if (this.gameState === GAMESTATE.PAUSE ||
            this.gameState === GAMESTATE.GAMEOVER ||
            this.gameState === GAMESTATE.MENU)
            return;
        this.brick = this.brick.filter(object => !object.markedForDeletion); //remove objects that have true valued of markedForDeletion

        [...this.gameObject,...this.brick].forEach(obj => {
            obj.update(deltaTime)
        });
        if (this.brick.length===0){
            this.currentLevel++;
            this.gameState=GAMESTATE.NEWLEVEL;
            this.start();

        }

    }

    draw(ctx) {
        [...this.gameObject,...this.brick].forEach(obj => {
            obj.draw(ctx);
        });

        ctx.fontFamily="Calculator LCDs,Arial"
        //ctx.font = "30px Arial";
        ctx.fillStyle = "red";

        let num =this.currentScore.toString().length
        switch (num) {
            case 2:
                ctx.fillText(this.currentScore, 35, 30);
                break;
            case 3:
                ctx.fillText(this.currentScore, 35, 30);
                break;
            case 4:
                ctx.fillText(this.currentScore, 40, 30);
                break;
            case 5:
                ctx.fillText(this.currentScore, 45, 30);
                break;
            default:
                ctx.fillText(this.currentScore, 35, 30);
                break;

        }

        if (this.gameState===GAMESTATE.PAUSE){
            ctx.rect(0,0,this.gameWidth,this.gameHeight);
            ctx.fillStyle="rgba(0,0,0,0.5)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);

        }
        if (this.gameState===GAMESTATE.MENU){
            ctx.rect(0,0,this.gameWidth,this.gameHeight);
            ctx.fillStyle="rgba(0,0,0,1)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press space to start battle ", this.gameWidth / 2, this.gameHeight / 2);

        }
        if (this.gameState===GAMESTATE.GAMEOVER){
            ctx.rect(0,0,this.gameWidth,this.gameHeight);
            ctx.fillStyle="rgba(0,0,0,1)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);

        }

    }
}