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

//Factory function to create player profile
const Player = (name) => {
  let choice = [];
  return {name, choice};
}

const Game = (() => {

  let selections = [];
  
  const playGame = (object1, object2) => {
    let blocks = document.querySelector('.gameboard').querySelectorAll('.gameboard-block');
    
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].addEventListener('click', () => {
        selections.push(blocks[i].getAttribute('block'));
        displayChoice(selections, blocks[i]);
      }, {once: true});
    }; 
  };

  const displayChoice = (array, currentElement) => {
    let lastIndex = array.length - 1;
    let title = document.querySelector('.playerturn');
    
    if(lastIndex % 2 === 0) {
      let choiceX = document.createElement('div');
      choiceX.textContent = 'X';
      choiceX.classList.add('choice');
      currentElement.appendChild(choiceX);

      title.textContent = `Player O's Turn`;

    } else if(lastIndex % 2 === 1) {
      let choiceO = document.createElement('div');
      choiceO.textContent = 'O';
      choiceO.classList.add('choice');
      currentElement.appendChild(choiceO);

      title.textContent = `Player X's Turn`;
    }
  };

  return{playGame};

})();

Blocks.createBlocks();
const PLAYER_X = Player('playerX');
const PLAYER_O = Player('playerO');
Game.playGame(PLAYER_X, PLAYER_O);


 
