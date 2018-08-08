import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './home.js';
import Game from './game.js'

export default class Index extends React.Component {

  constructor(props) {
    super(props);

    console.log("Index: " + JSON.stringify(this.props));
  }

  render(){
   return(
    <div className="App">
      <nav className="navbar pure-menu pure-menu-horizontal">
          <a href="#" className="pure-menu-heading pure-menu-link">Rock Paper Scissors</a>
      </nav>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact render={props => <Home {...props} />} />
          <Route path='/game' exact render={props => <Game web3={this.props.web3} {...props} salt={this.props.salt} />} />
        </Switch>
      </BrowserRouter>
    </div>
  )
  }
}
