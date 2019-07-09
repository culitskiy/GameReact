import React from 'react';
import './app2.css';
import { Table } from '../table2/table2';
import { PointCounterPanel } from '../pointCounterPanel2/pointCounterPanel2';
import { Reset } from '../reset2/reset2';
import swal from 'sweetalert';
import Timer from '../timer/timer';


export default class App2 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            card: [[18,0],[1,0],[19,0],[3,0],[35,0],[17,0],
                   [6,0],[7,0],[8,0],[32,0],[10,0],[11,0],
                   [12,0],[26,0],[14,0],[15,0],[20,0],[5,0],
                   [0,0],[2,0],[16,0],[21,0],[22,0],[30,0],
                   [34,0],[25,0],[13,0],[27,0],[28,0],[29,0],
                   [23,0],[31,0],[9,0],[33,0],[24,0],[4,0]],
            player: 1,
            player1Point: 0,
            player2Point: 0,
            sec: 0,
            min: 0
        };
    }

    timer = () => {
        this.setState((state) => {
          return { sec: state.sec + 1}
        });
        
        
        if(this.state.sec === 60){
            this.setState({
                sec: 0,
                min: this.state.min + 1
            });
        }
    }
    // componentDidMount(){
    //     setInterval(this.timer(), 1000);
    // }

    
    closeCard = (i,y) => {
        const card = [...this.state.card];
        card[i][1] = 2;
        card[y][1] = 2;
        this.setState({
            card
        });
    }

    pointCounter = () => {
        if (this.state.player === 1){
            this.setState({
                player1Point: this.state.player1Point +1
            });
        } else {
            this.setState({
                player2Point: this.state.player2Point +1
            });
        }
    }

    check = () => {
        let el = [...this.state.card];
        for(let i = 0; i < el.length; i++) {
            for(let y = i +1; y < el.length; y++){
                if(el[i][1] === 1 && (el[y][1] === 1) && (Math.abs(el[y][0] - el[i][0]) === 18)) {
                    
                    this.closeCard(i,y);
                    this.pointCounter();
                }
            }
        }
    };

    checlWin = () => {
    
    const player1 = this.state.player1Point;
    const player2 = this.state.player2Point;

        if((player1 + player2) >= 18){
            if(player1 < player2){
                swal('Конец! Победил второй игрок!');
            }if(player1 === player2){
                swal('Конец! Ничья!');
            }if(player1 > player2){
                swal("Конец!Победил первый игрок!");
            }
        }
    };

    player = () => {
        let card = [...this.state.card];
        let openCardIndex = [];
        let openCardCounter = 0;

        for (let i = 0; i < card.length; i++){
            if (card[i][1] === 1){
                openCardCounter++;
                openCardIndex.push(i);
            }

        }
        if (openCardCounter >= 2){
            card[openCardIndex[0]][1] = 0;
            card[openCardIndex[1]][1] = 0;

            this.setState({
                card,
                player: this.state.player === 1 ? 0 : 1
            });
        }
    };

    cellClick = (i) => {
        const card = [...this.state.card];
        card[i][1] = this.state.card[i][1] === 0 ? 1: 0;
        this.setState({
            card
            });
        setTimeout(() => {this.check()},3000);
        setTimeout(() => {this.player()},3000);
        setTimeout(() => {this.checlWin()}, 3000);

    };

    playerPanel = () => {
        if (this.state.player === 1){
            return "Первый игрок, ходи!";
        } else {
            return "Второй игрок, ходи";
        }
    }

    reset = () => {
        const array = [...this.state.card]
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            array[i][1] = 0;
        }
      this.setState({
            card: array,
            player1Point: 0,
            player2Point: 0,
            player: 1,
            min: 0,
            sec: 0
        });
    
    };
    render (){

        return (
            <div>
               <div className='app'>
               <Timer 
                timer={this.timer}
                sec={this.state.sec}
                min={this.state.min}/>
                <Reset reset={this.reset}/>
                <div className='playerPanel'>{this.playerPanel()}</div>
                <div className='pointCounter'><PointCounterPanel player1={this.state.player1Point} player2={this.state.player2Point}/></div>
               </div>
                <div><Table cellClick={this.cellClick} data={this.state.card}/></div>
                
            </div>
        )
    }
}