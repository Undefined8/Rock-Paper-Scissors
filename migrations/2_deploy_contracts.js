var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var RPS = artifacts.require("./RPS.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy( RPS
                 , 0x805cdcf68cc12220f89425be89daa44dbc83ff30 
                 , 0
                 , 1
                 , 2
                 , 2
                 , 0x805cdcf68cc12220f89425be89daa44dbc83ff30
                 );
};
