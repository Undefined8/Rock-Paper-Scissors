import React from 'react';

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

import getWeb3 from '../utils/getWeb3'
import RPS from '../../build/contracts/RPS.json'

export default class Game extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      playerChoice: '',
      opponentChoice: '',
      winner: '',
      web3: null,
      txResult: null,
      salt: props.salt
    }
  }

  componentWillMount(){
    getWeb3
    .then(results => {
      this.setState({
        web3: results.web3
      })
    })
    .catch(() => {
      console.log('Error finding web3.')
    })
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
      default:
        break;
    }

    if(player === 'rock') {
        if(opponent === 'scissors'){
            winner = 'You Win';
        }else if(opponent === 'paper'){
            winner = 'You Lose';
        }else{
            winner = 'Tie';
        }
    }else if(player === 'paper') {
        if(opponent === 'rock'){
            winner = 'You Win';
        }else if(opponent === 'scissors'){
            winner = 'You Lose';
        }else{
            winner = 'Tie';
        }
    }else if(player === 'scissors') {
        if(opponent === 'paper'){
            winner = 'You Win';
        }else if(opponent === 'rock'){
            winner = 'You Lose';
        }else{
            winner = 'Tie';
        }
    }

    const contract = require('truffle-contract');
    const rps = contract(RPS);

    rps.setProvider(this.state.web3.currentProvider);

    let rpsInstance;

    var wager = this.props.location.state.ether == "0.01" ? 10000000000000000 : (this.props.location.state.ether ==  "0.1" ? 100000000000000000 : 1000000000000000000);

    var gamePlay = player == 'rock' ? 0 : (player == 'scissor' ? 1 : 2)
    var commitHash = this.state.web3.sha3(""+gamePlay+this.state.salt)
    console.log("commitHash: " + commitHash)

    this.state.web3.eth.getAccounts((error, accounts) => {
      rps.deployed().then((instance) => {
        rpsInstance = instance;

        // TODO: define commitHash
        return rpsInstance.commit(commitHash, {from: accounts[0], value: wager})

      }).then((result) => {
        return this.setState({ txResult: result })
      })
    })

    this.setState({
      playerChoice: player,
      opponentChoice: opponent,
      winner: winner
    })

  }

  toImagefromChoice(choice, flipped = false){
    switch(choice){
      case "rock":
        return (<img src="../res/Rock.png" className={"option-actor" + (flipped ? " flipped" : "")} alt="didnt load"/>);
      case "paper":
        return (<img src="../res/Paper.png" className={"option-actor" + (flipped ? " flipped" : "")} alt="didnt load"/>);
      case "scissors":
        return (<img src="../res/Scissors.png" className={"option-actor" + (flipped ? " flipped" : "")} alt="didnt load"/>);
      default:
        break;
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
              <div className="option-button" onClick={() => {this.playGame('rock')}}>
                <img src="../res/Rock.png" className="option-icon" alt="didnt load"/>
              </div>
            </div>
            <div className="pure-u-1-3">
              <div className="option-button" onClick={() => {this.playGame('paper')}}>
                <img src="../res/Paper.png" className="option-icon" alt="didnt load"/>
              </div>
            </div>
            <div className="pure-u-1-3">
              <div className="option-button" onClick={() => {this.playGame('scissors')}}>
                <img src="../res/Scissors.png" className="option-icon" alt="didnt load"/>
              </div>
            </div>
            <div className="pure-u-1-2 center">
              <p>You</p>
            </div>
            <div className="pure-u-1-2 center">
              <p>Opponent</p>
            </div>
            <div className="pure-u-1-2 center">
              {this.toImagefromChoice(this.state.playerChoice)}
            </div>
            <div className="pure-u-1-2 center">
              {this.toImagefromChoice(this.state.opponentChoice, true)}
            </div>
            <div className="pure-u-1-1 center">
              <p>{this.state.winner}</p>
            </div>
          </div>
        </main>
      </div>);

  }
}
