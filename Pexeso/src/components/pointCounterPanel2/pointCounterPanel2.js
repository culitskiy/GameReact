import React from 'react';
import './pointCounterPanel2.css';

export const PointCounterPanel = ({ player1, player2 }) => {
    return(
        <div>
        <div>Первый игрок:{player1}</div>
        <div>Второй игрок:{player2}</div>
        </div>
    )
}