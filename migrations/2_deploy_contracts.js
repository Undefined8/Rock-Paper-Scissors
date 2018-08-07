var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var RPS = artifacts.require("./RPS.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy( RPS
                 , 0x805cdcf68cc12220f89425be89daa44dbc83ff30 // Fees goes to Daniel's metamask 
                 , 0 // game-fee percent
                 , 1 // stake size
                 , 2 // max players
                 , 1 // game-stage length
                 , 0x805cdcf68cc12220f89425be89daa44dbc83ff30 // npt address
                 );
};
