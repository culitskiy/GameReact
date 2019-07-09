import React from 'react';
import './column3.css';
import {Cell3} from '../cell3/cell3';

export const Column3 = ({col, x, snake, apples}) => {
    
    const cell = col.map((el, id) => {
        return( <div>
            <Cell3 snake={snake} el={el} x={x} key={Date.now()} apples={apples} y={col.length-id}/> 
            </div>)
    });
    
    return (
        <div>
            {cell}
        </div>
    )
}