<<<<<<< HEAD
export default class InputHandler{
    constructor(paddle,game) {
        document.addEventListener('keydown',e=>{
            switch (e.keyCode){
                case 37:
                    paddle.moveLeft();
                    break;
                case 39:
                    paddle.moveRight();
                    break;
                case 27:
                    game.togglePause();
                    break;
                case 32:
                    game.start();
                    break;
            }

        });
        document.addEventListener('keyup',e=>{
            switch (e.keyCode){
                case 37:
                    if (paddle.speed<0){
                        paddle.stop();
                    }
                    break;
                case 39:
                    if (paddle.speed>0){
                        paddle.stop();
                    }
                    break;
            }

=======

export default class InputHandler {

    constructor(paddle, game) {
        document.addEventListener("keydown", (event) => {

            switch (event.keyCode) {

                case 37:
                    paddle.moveLeft();
                    break;


                case 39:
                    paddle.moveRight();
                    break;


                case 27:
                    game.togglePause();
                    break;

                case 32:
                    game.start();
                    break;

            }
        });

        document.addEventListener("keyup", (event) => {

            switch (event.keyCode) {

                case 37:
                    if (paddle.speed < 0) paddle.stop();

                    break;


                case 39:
                    if (paddle.speed > 0) paddle.stop();
                    break;



            }
>>>>>>> 5e73684399bde4e266a02ef6951c384c37bfcd03
        });
    }
}