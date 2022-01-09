<<<<<<< HEAD

export function detectCollision(ball, gameObject) {
    let bottomOfBall = ball.position.y + ball.size;
    let topOfBall = ball.position.y;

    let topOfObject = gameObject.position.y;
    let leftSideOfObject = gameObject.position.x;
    let rightSideOfObject = gameObject.position.x + gameObject.width;
    let bottomOfObject = gameObject.position.y + gameObject.height;

    if (
        bottomOfBall >= topOfObject &&
        topOfBall <= bottomOfObject &&
        ball.position.x >= leftSideOfObject &&
        ball.position.x + ball.size <= rightSideOfObject
    ) {
        return true;
    } else {
        return false;
    }
}
=======
export function detectCollision(ball, gameObject){
    
    let bottomOfTheBall = ball.position.y + ball.size;
    let topOTheBall     = ball.position.y;

    let topOfTheObject    = gameObject.position.y;
    let leftOfTheObject   = gameObject.position.x;
    let rightOfTheObject  = gameObject.position.x + gameObject.width;
    let bottomOfTheObject = gameObject.position.y - gameObject.height;

    if(    bottomOfTheBall >= topOfTheObject
        && topOTheBall     <= bottomOfTheObject 
        && ball.position.x >= leftOfTheObject
        && ball.position.x <= rightOfTheObject){
            
            return true;
        }else{
            return false;
        }
}
>>>>>>> 5e73684399bde4e266a02ef6951c384c37bfcd03
