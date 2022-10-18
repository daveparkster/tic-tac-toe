const Blocks = (() => {
  //Private variables and functions
  let container = document.querySelector('.gameboard');

  const createBlocks = function() {
    for (let i = 0; i < 9; i++) {
      let block = document.createElement('div');
      block.style.border = '2px solid black';
      block.classList.add('gameboard-block');
      container.appendChild(block)
               .setAttribute('block', i);
    }
  }
  return {createBlocks};
})(); 

//Private function to create players//
const Player = (name) => {
  const choice = [];

  return {name, choice};
};



const playerX = Player('playerX');
const playerO = Player('playerO');

Blocks.createBlocks(); 