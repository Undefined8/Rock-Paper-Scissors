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
    let randomNumber = Math.floor(Math.random() * 3)

    let player = choice;
    let opponent = '';
    let winner = '';

    switch (randomNumber){
      case 0:
        opponent = 'rock';
        break;
      case 1:
        opponent = 'paper';
        break;
      case 2:
        opponent = 'scissors';
        break;
    }


    if(player === 'rock') {
        if(opponent === 'scissors'){
            winner = 'You';
        }else if(opponent === 'paper'){
            winner = 'Not you';
        }else{
            winner = 'No one';
        }
    }else if(player === 'paper') {
        if(opponent === 'rock'){
            winner = 'You';
        }else if(opponent === 'scissors'){
            winner = 'Not you';
        }else{
            winner = 'No one';
        }
    }else if(player === 'scissors') {
        if(opponent === 'paper'){
            winner = 'You';
        }else if(opponent === 'rock'){
            winner = 'Not you';
        }else{
            winner = 'No one';
        }
    }

    this.setState({
      playerChoice: player,
      opponentChoice: opponent,
      winner: winner
    })

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
