import React from 'react';
import {Column3} from './column3/column3';

import './App3.css';

class App3 extends React.Component{
  constructor(){
    super();

    this.state = {
      field: Array(30).fill(Array(30).fill(1)),
      snake: [
        [7,15],
        [8,15],
        [9,15]
      ],
      direction: '',
      apples:[5,5],
      click: true
    };
  }

  onDirection = (e) => {
    console.log(e);
    let snake = this.state.snake;
    switch(e.keyCode){
      case 38:
        if(snake[snake.length - 1][0] !== snake[snake.length - 2][0]){
          this.setState({direction: 'up'});}
        // if(snake[snake.length -1][1] < snake[0][1]
        //   && snake[snake.length - 1][0] === snake[snake.length - 2][0]
        //    ){snake.reverse();}
        //    if( snake[0][0] !== snake[1][0]){
        //     this.setState({direction: 'down'});
        //    }
        
        break;
      case 37:
        if(snake[snake.length - 1][1] !== snake[snake.length - 2][1]){
          this.setState({direction: 'left'});}

        // if(snake[0][0] < snake[snake.length - 1][0]
        //    && snake[snake.length - 1][1] === snake[snake.length - 2][1]
        //    )
        //      {snake.reverse();}
        //      if(snake[0][1] !== snake[1][1]){
        //       this.setState({direction: 'right'});
        //      }
        
        break;
      case 39:
        if(snake[snake.length - 1][1] !== snake[snake.length - 2][1]){
          this.setState({direction: 'right'});}
        // if(snake[snake.length -1][0] < snake[0][0]
        //   && snake[snake.length - 1][1] === snake[snake.length - 2][1]
        //  )
        //   {snake.reverse();}
        //   if( snake[0][1] !== snake[1][1]){
        //     this.setState({direction: 'left'});
        //   }
        
        break;
      case 40: 
      if(snake[snake.length - 1][0] !== snake[snake.length - 2][0]){
      this.setState({direction: 'down'});}
        // if(snake[0][1] < snake[snake.length - 1][1]
        //   && snake[snake.length - 1][0] === snake[snake.length - 2][0]
        //   )
        //    { snake.reverse();}
        //    if(snake[0][0] !== snake[1][0]){
        //     this.setState({direction: 'up'});
        //    }
       
        break;
      default:
        this.setState({direction: '0'});
    }
    
  }

  move = () => {
    let snake = this.state.snake;

    const right = () => {
      // if(snake[snake.length -1][0] < snake[0][0]
      //   && (snake[snake.length - 1][1] === snake[snake.length - 2][1]
      //     )
        
      //   ){
      //   snake.reverse();
      // }
      snake.push([snake[snake.length - 1][0] + 1,snake[snake.length - 1][1]]);
        snake.splice(0,1);
    }
    const left = () => {
      // if(
     
      //  snake[0][0] < snake[snake.length - 1][0]
      //   && (snake[snake.length - 1][1] === snake[snake.length - 2][1]
      //     )){
        
      //   snake.reverse();}
        snake.push([snake[snake.length - 1][0] - 1,snake[snake.length - 1][1]])
        snake.splice(0,1);
      // } else{
      //   snake.push([snake[snake.length - 1][0] - 1,snake[snake.length - 1][1]])
      //   snake.splice(0,1);
      // }
    }
    const up = () => {
      // if(snake[snake.length -1][1] < snake[0][1]
      //   && 
      //     snake[snake.length - 1][0] === snake[snake.length - 2][0]
       
      //    ){
      //   snake.reverse();
      // }
      snake.push([snake[snake.length - 1][0],snake[snake.length - 1][1] + 1]);
      snake.splice(0,1);
    }
    const down = () => {
      // if(
      
      //  snake[0][1] < snake[snake.length - 1][1]
      //  && 
      //   snake[snake.length - 1][0] === snake[snake.length - 2][0]){
       
      //   snake.reverse();}
        snake.push([snake[snake.length - 1][0],snake[snake.length - 1][1] - 1])
        snake.splice(0,1);
        console.log('if');
   
    }
    switch(this.state.direction){
      case 'right':
        right();
        break;
      case 'left':
        left();
        break;
      case 'up':
         up();
        break;
      case 'down':
         down();
          break;
      default:
        console.log('Не та клавиша');
    };
    
    this.setState({
      snake: snake
    })
  }

  apples = () => {
    const min = 1;
    const max = this.state.field.length -1;
    function randomApples () {
      let random = min -0.5 + Math.random() * (max - min +1);
      random = Math.round(random);
      return random;
    };
    let applesArr = this.state.apples;
   const x = randomApples();
   const y = randomApples();

    this.setState({
      apples: [x,y]
    })
  }

  checkEat = () => {
    let snake = this.state.snake;
    const apple = this.state.apples;

    if(snake.some((el) => {
     return el[0] === apple[0] && el[1] === apple[1];
    })){
        snake.splice(0,0,apple);
        this.setState({
          snake: snake
        })

    // if(snake[snake.length - 1][0] === apple[0] 
    //   && snake[snake.length - 1][1] === apple[1]){
    //     snake.splice(0,0,apple);
    //     this.setState({
    //       snake: snake
    //     })
        this.apples();
      }
  }

  checkCrash = (int) => {
    const snake = this.state.snake;
    const up = snake[snake.length - 1][1] > this.state.field.length;
    const down = snake[snake.length - 1][1] < 1;
    const right = snake[snake.length - 1][0] > this.state.field[0].length;
    const left = snake[snake.length - 1][0] < 1;
    const snakeArr = snake.slice(0,snake.length - 2);
    console.log(snakeArr);
    const self = snakeArr.some((el) => {
      return el[0] === snake[snake.length - 1][0] && el[1] === snake[snake.length - 1][1];
    })


    if(up || down || left || right || self){
      alert(`Увы, ты врезался( Но ты неплохо пожрал:) Твоя змейка длинной ${snake.length} квадратика!`);
      clearInterval(int);
      this.setState({
        snake: [
          [7,15],
          [8,15],
          [9,15]
        ],
        direction: '',
        apples:[5,5],
        click: true
      })

    }
  }

  onMove = () => {
    if(this.state.click){
     let int = setInterval(() => {
        this.move();
        
        this.checkCrash(int);
        this.checkEat();
      }, 100);
    }

   
;    
    this.setState((state) => {
      return {
        click: false
      }
    })

  }

  
 
  render() {

    const column = this.state.field.map((el,i) => {
      return(
        <div  >
        <Column3 snake={this.state.snake} apples={this.state.apples} col={el} x={i+1}/>
        
        </div>
      )
    })
    
    return(
      <div>
      <div onClick={this.onMove} tabIndex='-1' onKeyDown={this.onDirection} className='app'>
        
         {column}
         </div>
         
      
      </div>
     
    )
  }
}
export default App3;
