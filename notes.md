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
