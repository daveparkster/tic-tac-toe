const Blocks = (() => {
  //Private variables and functions
  const container = document.querySelector('.gameboard');

  const createBlocks = function() {
    for (let i = 0; i < 9; i++) {
      const div = document.createElement('div');
      div.style.border = '2px solid black';
      div.classList.add('gameboard-block');
      container.appendChild(div)
               .setAttribute('block', i);
    }
  }
  return {createBlocks};
})(); 

//Private function to create player profile
const Player = (name) => {
  let choice = [];
  return {name, choice};
}

Blocks.createBlocks();
const PLAYER_X = Player('playerX');
const PLAYER_O = Player('playerO');

 
