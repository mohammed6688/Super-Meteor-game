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