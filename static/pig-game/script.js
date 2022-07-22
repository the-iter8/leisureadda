'use strict';
// Variables to store data
let playerActiveTotal = 0;
let playerActiveCurrentScore = 0;
let diceNumber = Math.floor(Math.random() * 6 + 1);

// constant values 
const sectionList = document.querySelectorAll('section');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNewGame = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');

let playerActiveTotalScoreDisp = document.querySelector('.player--active .score')

//Change the active user.
function changeActiveUser()
{
  for (let i = 0; i < 2; i++) {
    let sectionCList = sectionList[i].classList;

    if (playerActiveTotalScoreDisp.textContent >= 100 && sectionCList.contains('player--active')){sectionCList.add('player--winner')}
    
    // This used to add the section under active
    sectionCList.toggle('player--active')

    //   This code underneath is used to mark the current score as active 

      let playerActiveCurrentScoreDisp = document.querySelector(`.player--${i} .current-score`)

      if (sectionCList.contains('player--active') && !playerActiveCurrentScoreDisp.classList.contains('active'))
      {
        playerActiveCurrentScoreDisp.classList.add('active')
        
      }
      else if(!sectionCList.contains('player--active') && playerActiveCurrentScoreDisp.classList.contains('active'))
      {
        playerActiveCurrentScoreDisp.classList.remove('active')
      }
  }
} 

// Clicking on the hold button.
btnHold.addEventListener('click', function () {
    playerActiveTotalScoreDisp = document.querySelector('.player--active .score')
    playerActiveTotalScoreDisp.textContent = Number(playerActiveTotalScoreDisp.textContent) + playerActiveCurrentScore;

    playerActiveCurrentScore = 0;
    document.querySelector('.active').textContent = playerActiveCurrentScore;

    changeActiveUser();

});

// Clicking on the new game button.
btnNewGame.addEventListener('click', function(){
  
  // changes the src of the img in such a way that the Alt is visible only.
  dice.setAttribute('src','none');
  let playersTotal = document.querySelectorAll('.score')
  let playersCurrent = document.querySelectorAll(`.current-score`)
  for (let i = 0; i < 2; i++) 
  {

    let sectionCList = sectionList[i].classList;
    playersTotal[i].textContent = "0";

    sectionCList.remove('player--winner');
    sectionCList.remove('player--active');
    playersCurrent[i].textContent = 0;
  }
  playersCurrent[1].classList.remove('active');
  sectionList[0].classList.add('player--active')
});

// Rolling the dice.
btnRoll.addEventListener('click', function () {
  diceNumber = Math.floor(Math.random() * 6 + 1);
    if (diceNumber == 1)
    {
      playerActiveCurrentScore = 0;
      
      // Added this here for a reason
      document.querySelector('.active').textContent = playerActiveCurrentScore;
      dice.setAttribute('src', `dice-${diceNumber}.png`);

      // Function call to change the current side
      changeActiveUser();
      
    }
    else 
    {
      playerActiveCurrentScore += diceNumber;
      document.querySelector('.active').textContent = playerActiveCurrentScore;
      dice.setAttribute('src', `dice-${diceNumber}.png`);
    }
  });





