import React from 'react';

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Game extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      playerChoice: '',
      opponentChoice: '',
      winner: ''
    }
  }

  playGame(choice) {

    this.setState({playerChoice: choice});
    let randomNumber = Math.floor(Math.random() * 3)

    switch (randomNumber){
      case 0:
        this.setState({opponentChoice: 'rock'});
        break;
      case 1:
        this.setState({opponentChoice: 'paper'});
        break;
      case 2:
        this.setState({opponentChoice: 'scissors'});
        break;
    }

    let player = this.state.playerChoice;
    let opponent = this.state.opponentChoice;


    if(player == 'rock') {
        if(opponent == 'scissors'){
            this.setState({winner: 'You'});
        }else if(opponent == 'paper'){
            this.setState({winner: 'Not you'});
        }else{
            this.setState({winner: 'No one'});
        }
    }else if(player == 'paper') {
        if(opponent == 'rock'){
            this.setState({winner: 'You'});
        }else if(opponent == 'scissors'){
            this.setState({winner: 'Not you'});
        }else{
            this.setState({winner: 'No one'});
        }
    }else if(player == 'scissors') {
        if(opponent == 'paper'){
            this.setState({winner: 'You'});
        }else if(opponent == 'rock'){
            this.setState({winner: 'Not you'});
        }else{
            this.setState({winner: 'No one'});
        }
    }
  }

  render(){
    return (
      <div>
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1 className="center">Pick</h1>
              <p className="center">Betting: {this.props.location.state.ether} eth</p>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button" onClick={() => this.playGame('rock')}>Rock</button>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button" onClick={() => this.playGame('paper')}>Paper</button>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button" onClick={() => this.playGame('scissors')}>Scissors</button>
            </div>
            <div className="pure-u-1-1">
              <p>Your choice: {this.state.playerChoice}</p>
              <p>Opponent choice: {this.state.opponentChoice}</p>
              <p></p>
              <p>Winner: {this.state.winner}</p>
            </div>
          </div>
        </main>
      </div>);

  }
}
