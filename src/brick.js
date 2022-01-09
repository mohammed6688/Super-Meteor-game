<<<<<<< HEAD
import {detectCollision} from "/src/collisionDetection.js";

export default class Brick{
    constructor(game,position){
        this.game=game;
        this.gameWidth=game.gameWidth;
        this.gameHeight=game.gameHeight;
        this.image=document.getElementById('img_brick');
        this.position=position
        this.width=80;
        this.height=24;
        this.markedForDeletion=false;
=======
import { detectCollision } from "./collisionDetection";

export default class Brick{

    constructor(game, position){
        this.game = game;
        this.position = position;
        this.image = document.getElementById('img_brick');
        this.width = 80;
        this.height = 24; 

        this.markedForDeletion = false;
>>>>>>> 5e73684399bde4e266a02ef6951c384c37bfcd03
    }

    update(){
        if (detectCollision(this.game.ball,this)){
<<<<<<< HEAD
            this.game.ball.speed.y=-this.game.ball.speed.y;
            this.markedForDeletion=true;
        }
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

=======
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
>>>>>>> 5e73684399bde4e266a02ef6951c384c37bfcd03
}