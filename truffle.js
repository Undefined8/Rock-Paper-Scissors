var HDWalletProvider = require("truffle-hdwallet-provider");


var mnemonic = "cement credit pause cinnamon swarm educate strong mother candy pepper female price";
module.exports = {
  networks: {
    rinkeby: {
      provider: new HDWalletProvider(mnemonic, "https://rinkeby.infura.io/"),
      network_id: 4,
      gas: 4992222,
      gasPrice: 22000000000 // Specified in Wei

    }
  }
};
