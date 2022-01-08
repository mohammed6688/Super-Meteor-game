import { detectCollision } from "./collisionDetection";

export default class Brick{

    constructor(game, position){
        this.game = game;
        this.position = position;
        this.image = document.getElementById('img_brick');
        this.width = 80;
        this.height = 24; 

        this.markedForDeletion = false;
    }

    update(){
        if (detectCollision(this.game.ball,this)){
            this.game.ball.spead.y = - this.game.ball.spead.y;

            this.markedForDeletion = true;
        }
    }

    draw(){
        ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.width,
        this.height
        );
    }
}