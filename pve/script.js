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

//Game Module
const Game = (() => {

  let allSelections = [];
  
  const playGame = (object1, object2) => {
    let blocks = document.querySelector('.gameboard').querySelectorAll('.gameboard-block');

    let playerX = object1;
    let playerO = object2;

    blocks.forEach((block, index) => {
      block.addEventListener('click', function updateChoice() {
        allSelections.push(Number(blocks[index].getAttribute('block')));
        getChoice(allSelections, blocks[index], playerX, playerO);
      }, {once: true});
    });
  };

  const getChoice = (array, currentElement, object1, object2) => {

    let lastIndex = array.length - 1;
    let title = document.querySelector('.playerturn');
    let objectX = object1;
    let objectO = object2;

    if(lastIndex % 2 === 0) {
    
      objectX['choice'].push(allSelections[allSelections.length - 1]);

      if((objectX['choice'].length >= 3 && objectX['choice'].length <= 5)) {
          if(checkVictory(objectX) === true) {
            displayXVictory(currentElement, title);
            disableChoices();
          } else if((checkVictory(objectX) === false) && (objectX['choice'].length === 5)) {
            displayDraw(currentElement, title);
            disableChoices();
          } else {
            displayXChoice(currentElement, title);
          }
      } else if(objectX['choice'].length < 3) {
          displayXChoice(currentElement, title);
      } else {
          displayDraw(currentElement, title);
          disableChoices();
      }

    } else if(lastIndex % 2 === 1) {
      
      objectO['choice'].push(allSelections[allSelections.length -1]);

      if(objectO['choice'].length >= 3) {
        if(checkVictory(objectO) === true) {
          displayOVictory(currentElement, title);
          disableChoices();
        } else {
          displayOChoice(currentElement, title);
        }
      } else if(objectO['choice'].length < 3) {
          displayOChoice(currentElement, title);
      }

    }
  };

  const displayXChoice = (element, status) => {
    let choiceX = document.createElement('div');
    choiceX.textContent = 'X';
    choiceX.classList.add('choice');
    element.appendChild(choiceX);

    status.textContent = `Human's Turn`;
  }; 

  const displayOChoice = (element, status) => {
    let choiceO = document.createElement('div');
    choiceO.textContent = 'O';
    choiceO.classList.add('choice');
    element.appendChild(choiceO);

    status.textContent = `Computer's Turn`; 
  }; 

  const checkVictory = (object) => {
    let selections = object['choice'];
    let overallResult;
    
    let winningChoices = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));


    for(let i = 0; i < 8; i++) {
      let result = isSubset(selections, winningChoices[i]);
      
      if(result === true) {
        overallResult = true;
        break;
      } else {
        overallResult = false;
      }
    }

    return overallResult;
  }; 

  const displayXVictory = (element, status) => {
    let choiceX = document.createElement('div');
    choiceX.textContent = 'X';
    choiceX.classList.add('choice');
    element.appendChild(choiceX);
    
    status.textContent = "Human Wins";
  };

  const displayOVictory= (element, status) => {
    let choiceO = document.createElement('div');
    choiceO.textContent = 'O';
    choiceO.classList.add('choice');
    element.appendChild(choiceO);
    
    status.textContent = `Cpu Wins`;
  };

  const displayDraw = (element, status) => {
    let choiceX = document.createElement('div');
    choiceX.textContent = 'X';
    choiceX.classList.add('choice');
    element.appendChild(choiceX);

    status.textContent = 'Draw';
  }; 

  const disableChoices = () => {
    let old_gameboard = document.querySelector('.gameboard');
    let new_gameboard = old_gameboard.cloneNode(true);
    old_gameboard.parentNode.replaceChild(new_gameboard, old_gameboard);
  };

  const resetGame = (player1, player2) => {
    const restart = document.querySelector('.restart');

    restart.addEventListener('click', () => {
      window.location.reload();
    });
  }; 


  return{playGame, resetGame};

})();

Blocks.createBlocks();
const HUMAN = Player('human');
const CPU = Player('cpu');
Game.resetGame(HUMAN, CPU); 
Game.playGame(HUMAN, CPU);
