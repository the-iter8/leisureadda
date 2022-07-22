"use strict";

// Event handle function


const btn = document.querySelectorAll(".btn"); //List of the buttons 012
let inputPC = btn[Math.trunc(Math.random() * 3)].textContent;
let userInput = 0;
let tries = 0;
let score = 0;
let compScore = 0;

// Resets all the values back to normal
function reset()
{
  inputPC = btn[Math.trunc(Math.random() * 3)].textContent;
  userInput = 0;
  tries = 0;
  score = 0;
  compScore = 0;
}

// BTNS
const btnAgain = document.querySelector(".again");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissor = document.querySelector(".scissor");

// Scores and headings
const comp = document.querySelector(".comp>span");
const user = document.querySelector(".user>span");
const userScore = document.querySelector(".user-score");
const mainHeading = document.querySelector(".main-heading");

//
const body = document.querySelector("body");

function scoreUpdate() {
  if (mainHeading.textContent == `Computer Lost this round. 😂`) {
    score++;
  }
  else if (mainHeading.textContent == `Computer Won this round. 😓`) {
    compScore++;
  }
  userScore.textContent = score;
}

function display(userInput, inputPC) {
  comp.textContent = inputPC;
  user.textContent = userInput;
}

function check(userInput, inputPC) {
  console.log(userInput, inputPC);

  if (userInput == inputPC) {
    mainHeading.textContent = `It's a Draw. 🤷‍♂️`;
  } else if (userInput != inputPC) {
    if (userInput == `Rock`) {
      mainHeading.textContent =
        inputPC == `Scissor`
          ? `Computer Lost this round. 😂`
          : `Computer Won this round. 😓`;
    } else if (userInput == `Paper`) {
      mainHeading.textContent =
        inputPC == `Rock`
          ? `Computer Lost this round. 😂`
          : `Computer Won this round. 😓`;
    } else if (userInput == `Scissor`) {
      mainHeading.textContent =
        inputPC == `Paper`
          ? `Computer Lost this round. 😂`
          : `Computer Won this round. 😓`;
    }
  }
}

// WIN or Lost
function triesCheck() {
  const dispScore = `Comp score - ${compScore} User Score - ${score}.`;
  if (tries == 3) {
    if (compScore == score) {
      mainHeading.textContent = `It's a Draw. ${dispScore}`;
    } else if (compScore > score) {
      mainHeading.textContent = `Computer Won. ${dispScore}`;
      body.style.background = "red";
    } else if (compScore < score) {
      body.style.background = "green";
      mainHeading.textContent = `You Won. ${dispScore}`;
    }
  }
}

// Common event function
const eventCallFunc = function () {
  tries++;
  let inputPC = btn[Math.trunc(Math.random() * 3)].textContent;
  display(userInput, inputPC);
  check(userInput, inputPC);
  triesCheck();
  scoreUpdate(score);
};

btnRock.addEventListener("click", function () {
  userInput = `Rock`;
  eventCallFunc();
});
btnPaper.addEventListener("click", function () {
  userInput = `Paper`;
  eventCallFunc();
});
btnScissor.addEventListener("click", function () {
  userInput = `Scissor`;
  eventCallFunc();
});

btnAgain.addEventListener("click", function(){
  userInput = `Rock`;
  body.style.background = `#1a1a1a`;
  mainHeading.textContent = `-- Rock Paper Scissor --`;
  userScore.textContent = `0`;
  reset();
})
