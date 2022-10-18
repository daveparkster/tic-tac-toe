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

const Player = (() => {

})();








Blocks.createBlocks(); 