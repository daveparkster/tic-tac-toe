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

  let allSelections = [];
  
  const playGame = (object1, object2) => {
    let blocks = document.querySelector('.gameboard').querySelectorAll('.gameboard-block');

    let playerX = object1;
    let playerO = object2;
    
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].addEventListener('click', () => {
        allSelections.push(blocks[i].getAttribute('block'));
        getChoice(allSelections, blocks[i], playerX, playerO);
      }, {once: true});
    }; 
  };

  const getChoice = (array, currentElement, object1, object2) => {

    let lastIndex = array.length - 1;
    let title = document.querySelector('.playerturn');

    if(lastIndex % 2 === 0) {
    
      object1['choice'].push(allSelections[allSelections.length - 1]);

      if((object1['choice'].length >= 3) && (object1['choice'].length <= 5)) {

      } else if(object1['choice'].length < 3) {
          displayXChoice(currentElement, title);
      } else {

      }

    } else if(lastIndex % 2 === 1) {
      
      object2['choice'].push(allSelections[allSelections.length -1]);

      if((object2['choice'].length >= 3) && (object2['choice'].length <= 4)) {

      } else if(object2['choice'].length < 3) {
          displayOChoice(currentElement, title);
      } else {

      }

    }
  };

  const displayXChoice = (element, status) => {
    let choiceX = document.createElement('div');
    choiceX.textContent = 'X';
    choiceX.classList.add('choice');
    element.appendChild(choiceX);

    status.textContent = `Player O's Turn`;
  }; 

  const displayOChoice = (element, status) => {
    let choiceO = document.createElement('div');
    choiceO.textContent = 'O';
    choiceO.classList.add('choice');
    element.appendChild(choiceO);

    status.textContent = `Player X's Turn`; 
  }; 

  return{playGame};

})();

Blocks.createBlocks();
const PLAYER_X = Player('playerX');
const PLAYER_O = Player('playerO');
Game.playGame(PLAYER_X, PLAYER_O);


 
