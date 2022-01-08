import Brick from "./brick.js";

export function buildLevel(game, level) {
    let bricks = [];

    level.forEach((row, rowIndex) => {  //iterate in each row
        row.forEach((brick, brickIndex) => {  //iterate in each brick
            if (brick === 1) {
                let position = {
                    x: 80 * brickIndex,
                    y: 75 + 24 * rowIndex
                };
                bricks.push(new Brick(game, position));
            }
        });
    });

    return bricks;
}

export const level1=[
    [0,0,1,0,0,0,0,0,0,0],
    [1,1,0,1,1,1,1,0,1,1],
    [1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
]
export const level2=[
    [0,1,0,1,0,1,0,1,0,1],
    [1,1,0,1,1,1,1,0,1,1],
    [1,1,1,1,0,1,1,1,1,1],
    [1,1,1,1,1,1,1,1,1,1]
]
