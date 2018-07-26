import React from 'react';

import '../css/oswald.css'
import '../css/open-sans.css'
import '../css/pure-min.css'
import '../App.css'

export default class Game extends React.Component {

  render(){
    return (
      <div>
        <main className="container">
          <div className="pure-g">
            <div className="pure-u-1-1">
              <h1 id="header">Pick</h1>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button">Rock</button>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button">Paper</button>
            </div>
            <div className="pure-u-1-3">
              <button className="pure-button">Scissors</button>
            </div>
          </div>
        </main>
      </div>);

  }
}
