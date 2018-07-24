pragma solidity ^0.4.24;


contract RockPaperScissor_complex{

    enum playState {ROCK, PAPER, SCISSOR}

    address[] players;

    mapping(address => playState) stateForPlayer;
    mapping(address => uint) costForPlayer;

    uint cost = 1000000;

    // TODO: create function that updates the cost to either 0.01, 0.1 or 1 ETH

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
