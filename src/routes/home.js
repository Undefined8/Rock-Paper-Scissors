import React from 'react';

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

import {Link} from 'react-router-dom'

export default class Home extends React.Component {

  routeToGame(eth) {
    return {
      pathname: '/game',
      state: {
        ether: eth
      }
    }
  }

  render(){
    return (
      <div>
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1 className="center">Pick your wager</h1>
            </div>
            <div className="pure-u-1-3 center">
              <Link to={this.routeToGame(0.01)} className="pure-button">0.01 eth</Link>
            </div>
            <div className="pure-u-1-3 center">
              <Link to={this.routeToGame(0.1)} className="pure-button">0.1 eth</Link>
            </div>
            <div className="pure-u-1-3 center">
              <Link to={this.routeToGame(1)} className="pure-button">1 eth</Link>
            </div>
          </div>
        </main>
      </div>
    );
  }
}
