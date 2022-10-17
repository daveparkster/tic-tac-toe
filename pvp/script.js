const Blocks = (() => {
  //Private variables and functions
  let container = document.querySelector('.gameboard');

  const createBlocks = function() {
    for(let i = 0; i < 9; i++) {
      let block = document.createElement('div');
      block.style.border = '2px solid black';
      container.appendChild(block).setAttribute('block', i);
    }
  }

  return {createBlocks};
})(); 

Blocks.createBlocks(); 