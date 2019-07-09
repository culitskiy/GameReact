import React from 'react';

export default class Timer extends React.Component{

      min = () => {
        let min = (this.props.min < 10) ? '0' : '';
    
        return min;
    };
    sec = () => {
        let sec = (this.props.sec < 10) ? '0' : '';
        return sec;
    };
    
      componentDidMount() {
         setInterval(this.props.timer, 1000);
      }
    //   componentWillUnmount(){
    //     clearInterval(this.intervalId);
    //   }

    render(){
       
        return(
            <div>
                {this.min()}{this.props.min}:{this.sec()}{this.props.sec}
            </div>
        )
    }
}