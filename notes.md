# How to write a game using NashHash

## 1. Every game inherits from `Game.sol`

Example:

```js

import "./Game.sol"

contract MyGame is Game {

}

```

## 2. Every game implements the function `checkGuess`

```js

import "./Game.sol"

contract MyGame is Game {

  function checkGuess(string guess) private {
  
  }
  
}
 ```
 
 Note that it appears that we call `stringToUint` from `GameHelper.sol` inside of this function. This "decrypts" the value stored in the contract back to the original number.
 
 ## 3. Every game implements the function `findWinners`
 
 ```js
 
import "./Game.sol"

contract MyGame is Game {

  function checkGuess(string guess) private {
  
  }
  
  function findWinners() private {
  
  }
  
}
 ```


# From `Game.sol`

```
/*
Dear all, games should inherit form this contract because this contract has the commit/reveal protocol
The specific game will have to only define two functions:

-- guessCheck(string guess): the function has to error out in if the guess is not compliant with the rules
-- findWinners(): the function determined the winners and distributes the payouts. 

*/

/*
    The following two functions are the users gaming interface.
        -- Call commit to commit a hash of your guess for the game. Its a hash, since
        you probably dont want other players to see your guess
        -- Call reveal to reveal your guess. You will not participate in the
        round if you forget to reveal your guess, but your stake will still become
        someone's prize! Make sure you reveal.
*/
```
