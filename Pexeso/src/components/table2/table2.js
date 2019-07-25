import React from 'react';
import './table2.css';
import { Cell } from '../cell2/cell2';


export const Table = ({data}) => {

   function showCell(i){
        return i.map((el, i) => (<div><Cell data={el[1]}  key={i} el={el[0]} i={i}/></div>));
    }

    return (
        <div className='table'>
            {showCell(data)}
            
        </div>
    )
}