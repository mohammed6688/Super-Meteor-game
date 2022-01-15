import Paddle from "./Paddle.js"
import InputHandler from "./input.js";
import Ball from "./ball.js";
import { level1, level2, level3, buildLevel } from "./levels.js";
import { heartHandling } from "/src/index.js"
import Music from "./music.js"


let audio = new Music();

const GAMESTATE = {
    PAUSE: 0,
    RUNNING: 1,
    MENU: 2,
    GAMEOVER: 3,
    NEWLEVEL: 4
}
export default class Game {
    constructor(gameWidth, gameHeight,mainaudio) {
        this.gameWidth = gameWidth;
        this.gameHeight = gameHeight;
        this.gameState = GAMESTATE.MENU;
        this.ball = new Ball(this);
        this.paddle = new Paddle(this);
        new InputHandler(this.paddle, this);
        this.gameObject = [];
        this.brick = [];
        this.levels = [level1, level2, level3];
        this.currentLevel = localStorage.getItem("level");
        if (this.currentLevel == null) this.currentLevel = 0;
        console.log(this.currentLevel)
        this.lives = 1;
        this.lives = 3;
        this.mainaud=mainaudio;
        heartHandling(0);
        this.currentScore = 0;
        this.maxScore = 0;
        this.audio = new Music();
        this.audioFlag = JSON.parse(localStorage.getItem("audioFlag"));

    }

    start() {
        if (
            this.gameState !== GAMESTATE.MENU &&
            this.gameState !== GAMESTATE.NEWLEVEL
        )
            return;

        this.currentLevel = localStorage.getItem("level");

        this.brick = buildLevel(this, this.levels[this.currentLevel]); //return array of objects of bricks
        this.gameObject = [this.ball, this.paddle];
        this.gameState = GAMESTATE.RUNNING;
        this.ball.reset();


        // this.audio.mainVolumeChange(0.4);
        // this.audio.mainPlay();


        heartHandling(this.lives);
    }



    togglePause() {
        if (this.gameState === GAMESTATE.PAUSE) {
            this.gameState = GAMESTATE.RUNNING;
            document.getElementById("neon-wrapper").style.display = "none"
            this.audio.mainVolumeChange(0.4);

        } else if (this.gameState === GAMESTATE.RUNNING || this.gameState === GAMESTATE.GAMEOVER) {

            this.gameState = GAMESTATE.PAUSE;
            document.getElementById("neon-wrapper").style.display = "flex"
            this.audio.mainVolumeChange(0.2);
        }

    }

    update(deltaTime) {
        if (this.lives === 0) {
            this.gameState = GAMESTATE.GAMEOVER;
            document.getElementById("score").style.display = "none";

        }
        if (this.gameState === GAMESTATE.PAUSE ||
            this.gameState === GAMESTATE.GAMEOVER ||
            this.gameState === GAMESTATE.MENU)
            return;

        this.brick = this.brick.filter(object => !object.markedForDeletion); //remove objects that have true valued of markedForDeletion

        [...this.gameObject, ...this.brick].forEach(obj => {
            obj.update(deltaTime)
        });
        if (this.brick.length === 0) {
            this.currentLevel++;
            this.gameState = GAMESTATE.NEWLEVEL;
            this.start();

        }

    }

    draw(ctx) {
        [...this.gameObject, ...this.brick].forEach(obj => {
            obj.draw(ctx);
        });

        ctx.fontFamily = "Calculator LCDs,Arial"
        //ctx.font = "30px Arial";
        ctx.fillStyle = "red";


        document.getElementById("score").style.display = "none";

        let score = document.getElementById("score");
        score.textContent = this.currentScore;
        document.getElementById("gameOver").style.display = "none";



        if (this.currentScore != 0 && this.gameState != GAMESTATE.GAMEOVER && document.getElementById("game").style.display === "block") {
            document.getElementById("score").style.display = "block";
            score.textContent = this.currentScore;
        }

        if (this.gameState === GAMESTATE.PAUSE) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,0.5)";
            ctx.fill();
        }

        if (this.gameState === GAMESTATE.MENU) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();
            ctx.font = "30px Arial";
            ctx.fillStyle = "white";
            ctx.textAlign = "center";
            ctx.fillText("Press space to start battle ", this.gameWidth / 2, this.gameHeight / 2);
        }

        if (this.gameState === GAMESTATE.GAMEOVER) {
            ctx.rect(0, 0, this.gameWidth, this.gameHeight);
            ctx.fillStyle = "rgba(0,0,0,1)";
            ctx.fill();

            // ctx.font = "30px Arial";
            // ctx.fillStyle = "white";
            // ctx.textAlign = "center";
            // ctx.fillText("GAME OVER", this.gameWidth / 2, this.gameHeight / 2);

            if (document.getElementById("game").style.display === "block") {
                document.getElementById("gameOver").style.display = "block";
            }


        }

    }
}



////////////////////// collision audio ////////////////////////

//let myCollisionSound = document.getElementById("collisionSound");
var flag_mute_unmute = 1;
let slider_song2 = document.getElementById("setting_song2")
let img_song2 = document.getElementById("setting_unmute2")
var slider_song1 = document.getElementById("setting_song1")
var img_song1 = document.getElementById("setting_unmute1")

let myFirstEnter_2 = localStorage.getItem("firstEnter_2");
if (myFirstEnter_2 == null) {
    localStorage.setItem('sliderVal_2', 50);
    localStorage.setItem("firstEnter_2", 1);
}

slider_song2.value = JSON.parse(localStorage.getItem('sliderVal_2'))
//myCollisionSound.volume = slider_song2.value/100;
if(slider_song2.value!=null){
audio.sfxVolumeChange(slider_song2.value / 100);


}
if (slider_song2.value == 0) {
    img_song2.setAttribute('src', 'assets/mute.png')
}
else {
    img_song2.setAttribute('src', 'assets/voice.png')
}

slider_song1.addEventListener('change', e => {
    console.log("yes yes");
    var val = e.target.value;
    mainMusic.volume = val / 100;
    mainaud.mainVolume= val / 100;

    mainaud.mainVolumeChange( val / 100);
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

slider_song2.addEventListener('change', e => {
    console.log("yes");
    var val = e.target.value;
    audio.sfxVolumeChange(val / 100);

    //myCollisionSound.volume = val / 100;
    localStorage.setItem('sliderVal_2', val)
    if (val == 0) {
        img_song2.setAttribute('src', 'assets/mute.png')
    }
    else {
        img_song2.setAttribute('src', 'assets/voice.png')
    }

});


img_song2.addEventListener('click', e => {

    if (JSON.parse(localStorage.getItem('sliderVal_2')) != 0) {
        img_song2.setAttribute('src', 'assets/mute.png')
        localStorage.setItem('pre_sliderVal_2', slider_song2.value)
        localStorage.setItem('sliderVal_2', 0)
        slider_song2.value = 0;
        audio.sfxVolumeChange(0);

        // myCollisionSound.volume = 0;
    }
    else {
        img_song2.setAttribute('src', 'assets/voice.png')
        slider_song2.value = JSON.parse(localStorage.getItem('pre_sliderVal_2'));
        localStorage.setItem('pre_sliderVal_2', 0)
        localStorage.setItem('sliderVal_2', slider_song2.value)
        audio.sfxVolumeChange(slider_song2.value / 100);

        //myCollisionSound.volume = slider_song2.value / 100;
    }

});