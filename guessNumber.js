import React, { Component } from 'react';
class App extends Component {
    state = {randomNums: null, guessNums: null, count: 0}
    generateRandom() {
        const random = Math.floor(Math.random() * 10)+1;
        this.setState({randomNums: random})
    }
    handleChange = (e) => {
        this.setState({guessNums: e.target.value})
    } 

    numsCheck=(a,b)=> {
        this.generateRandom();
        if(this.state.randomNums!==this.state.guessNums){
            this.setState((prevState) => {
                return {count: prevState.count + 1}
               });
               return this.state.count;
            } 
            return this.state.count;

        }
    
  
   
    render() {
        const c = !this.state.randomNums ? null : <h5>Try Again</h5>;
       const result = (parseInt(this.state.guessNums)===parseInt(this.state.randomNums)) ? <div><h5>Congratulation! Your guessed is matched in {this.state.count} attempts.</h5></div> : <div>{c}</div>
      
       return (
            <div className = "ui container" style = {{marginTop: 10}}>
            <h4>Guess the number (1-10) :</h4>
            <div className = "ui form">
                <input onChange = {(e)=>this.handleChange(e)} type = 'number'/>

            </div>
                <button style = {{margin: 5}} onClick={this.numsCheck} className = "ui primary button">Make Guess</button>
                <h4>The generated random number is: {this.state.randomNums} </h4>
                {result}
            </div>
        );
    }
}

export default App;
