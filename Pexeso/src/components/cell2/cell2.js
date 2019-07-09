import React from 'react';
import './cell2.css';
// import img from '../../img/0.png';


export const Cell = ({data, i, el, cellClick}) => {

   let imgChange = (data) => {
    
       if (data === 1){
           return require(`../../img/${el}.png`);
       } if(data === 2){
           return require('../../img/cross.png');
       }else { 
           return require(`../../img/mops.jpg`);
         }
   };

   let cellClick1  = () => {
       
        cellClick(i);
    };

    return (
        <div onClick={cellClick1} className='cell'><img className='img' src = {imgChange(data)} alt='2'/></div>
    )
}