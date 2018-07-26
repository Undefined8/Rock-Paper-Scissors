import React from 'react';

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

import {Link} from 'react-router-dom'

export default class Home extends React.Component {

  render(){
    return (
      <div>
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1 id="header">Pick your wager</h1>
            </div>
            <div className="pure-u-1-3">
              <Link to="/game" className="pure-button">0.01 eth</Link>
            </div>
            <div className="pure-u-1-3">
              <Link to="/game" className="pure-button">0.1 eth</Link>
            </div>
            <div className="pure-u-1-3">
              <Link to="/game" className="pure-button">1 eth</Link>
            </div>
          </div>
        </main>
      </div>);

  }
}
