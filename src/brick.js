import {detectCollision} from "/src/collisionDetection.js";

export default class Brick{
    constructor(game,position){
        this.game=game;
        this.gameWidth=game.gameWidth;
        this.gameHeight=game.gameHeight;
        this.image=document.getElementById('img_brick');
        this.position=position
        this.width=game.gameWidth*0.05;
        this.height=game.gameHeight*0.05;
        this.markedForDeletion=false;
        this.level = JSON.parse(localStorage.getItem("level"));
    }

    update(){
        if (detectCollision(this.game.ball,this)){
            this.game.ball.speed.y=-this.game.ball.speed.y;
            this.markedForDeletion=true;

            switch(this.level){
                case 0:
                    this.game.currentScore+=5;
                    break;
                case 1:
                    this.game.currentScore+=10;
                    break;
                case 2:
                    this.game.currentScore+=15;
                    break;
                default:
                    this.game.currentScore+=5;
            }
            this.checkMaxScore();
        }
    }

    checkMaxScore(){
        let maxScore = JSON.parse(localStorage.getItem("maxScore"));
        if (maxScore<this.game.currentScore||maxScore==null){
            window.localStorage.setItem("maxScore",this.game.currentScore);
        }
        console.log(maxScore);
    }

    draw(ctx){
        ctx.drawImage(
            this.image,
            this.position.x,
            this.position.y,
            this.width,
            this.height
        );
    }

}