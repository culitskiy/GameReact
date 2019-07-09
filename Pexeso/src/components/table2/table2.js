import React from 'react';
import './table2.css';
import { Cell } from '../cell2/cell2';


export const Table = ({data, cellClick}) => {

   function showCell(i){
        return i.map((el, i) => (<div><Cell data={el[1]} cellClick={cellClick} key={i} el={el[0]} i={i}/></div>));
    }
// console.log(data);
    return (
        <div className='table'>
            {showCell(data)}
            
        </div>
    )
}