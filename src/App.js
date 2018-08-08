import React from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import RPS from '../build/contracts/RPS.json'


import './css/oswald.css'
import './css/open-sans.css'
import './css/pure-min.css'
import './App.css'

import Index from './routes/index.js'


class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      storageValue: 0,
      web3: null,
      salt: this.genSalt()
    }
  }

  genSalt(){
    var array = new Uint32Array(1);
    window.crypto.getRandomValues(array);
    return array[0].toString(16);
  }

  componentWillMount() {
    // Get network provider and web3 instance.
    // See utils/getWeb3 for more info.

  }

  buttonClick() {
    if(this.state.web3 != null){
      this.instantiateContract();
    }
  }

  instantiateContract() {
    /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

    const contract = require('truffle-contract')
    const simpleStorage = contract(SimpleStorageContract)

    const rps = contract(RPS)

    simpleStorage.setProvider(this.state.web3.currentProvider)
    rps.setProvider(this.state.web3.currentProvider)

    // Declaring this for later so we can chain functions on SimpleStorage.
    var simpleStorageInstance;

    // Get accounts.
    this.state.web3.eth.getAccounts((error, accounts) => {
      simpleStorage.deployed().then((instance) => {
        simpleStorageInstance = instance

        // Stores a given value, 5 by default.
        return simpleStorageInstance.set(5, {from: accounts[0]})
      }).then((result) => {
        // Get the value from the contract to prove it worked.
        return simpleStorageInstance.get.call(accounts[0])
      }).then((result) => {
        // Update state with the result.
        return this.setState({ storageValue: result.c[0] })
      })
    })
  }

  render() {
    return (
      <div>
        <Index web3={this.state.web3} salt={this.state.salt}/>
        <button className="pure-button" onClick={this.buttonClick.bind(this)}>Contract</button>
        <p>Storage Value: {this.state.storageValue}</p>
        <p>Salt: {this.state.salt}</p>
      </div>
    );
  }
}

export default App
