import React from 'react';
import './reset2.css';

export const Reset = ({reset}) => {
    const res = () => {
        reset();
    }

    return(
        <div className='res'>
            <button onClick={res} className='reset'>Reset</button>
        </div>
    )
}