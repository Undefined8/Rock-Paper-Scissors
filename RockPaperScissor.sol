pragma solidity ^0.4.24;

/*

The idea is that two players play against eachother.

1. Alice calls playRock()
2. Bob calls play*()
3. Anyone calls determineGame() to find out who won

*/

contract RockPaperScissor{

    enum playState {ROCK, PAPER, SCISSOR}

    address player1Address = 0x0;
    address player2Address = 0x0;

    playState player1;
    playState player2;

    uint cost = 1000

    // TODO: create function that updates the cost to either 0.01, 0.1 or 1 ETH
    // reminder: 1 ETH = 10^18 WEI
    // so cost for 1 ETH should be 1000000000000000000000

    function reward(address winner) private {
        winner.send(cost*2);
    }

    function tie(address p1, address p2) private {
        p1.send(cost);
        p2.send(cost);
    }

    function setPlayers () private {
        if(player1Address == 0x0) {
            player1Address = msg.sender;
        } else if(player2Address == 0x0){
            player2Address = msg.sender;
        }
    }

    // PUBLIC FUNCTIONS BELOW
    /////////////////////////

    function playRock () public {
      require(msg.value >= cost);
      setPlayers();
      if(msg.sender == player1Address){
        player1 = playState.ROCK;
      }
      if(msg.sender == player2Address){
        player2 = playState.ROCK;
      }
    }

    function playPaper () public {
        require(msg.value >= cost);
        setPlayers();
        if(msg.sender == player1Address){
            player1 = playState.PAPER;
        }
        if(msg.sender == player2Address){
            player2 = playState.PAPER;
        }
    }

    function playScissor () public {
        require(msg.value >= cost);
        setPlayers();
        if(msg.sender == player1Address){
            player1 = playState.SCISSOR;
        }
        if(msg.sender == player2Address){
            player2 = playState.SCISSOR;
        }
    }

    function determineGameAndReward () public {
        if(player1 == playState.ROCK && player2 == playState.PAPER){
            reward(player1Address);
        }
        if(player1 == playState.ROCK && player2 == playState.SCISSOR){
            reward(player1Address);
        }
        if(player1 == playState.ROCK && player2 == playState.ROCK){
            tie(player1Address, player2Address);
        }

        // TODO: fill in the other 6 possible outcomes

        player1Address = 0x0;
        player2Address = 0x0;

    }
}
