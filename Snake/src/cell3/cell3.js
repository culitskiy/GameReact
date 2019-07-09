import React from 'react';
import './cell3.css' ;


export const Cell3 = ({el, x , y, snake, apples}) => {

    const showCell = () => {
        const arr = [x,y];
        const i = snake.some((el) => {
            return el[0] === arr[0] && el[1] === arr[1];
        });
        const apple = apples.some((el) => {
            return el === arr[0] && el === arr[1];
        });

        if (i || (apples[0] === x && apples[1] === y)){
            return 'cell fuel';
        }else {
            return 'cell';
        }
    };
    

    return (
        

        <div className={showCell(snake,x,y)}> 
            
        </div>
    )
}