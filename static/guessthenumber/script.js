"use strict";

// Event handle function
let numberRandom = Math.trunc(Math.random() * 20);
let highscore = 0;
let score = 20;

// User clicks on the again button-
// User clicks on check button-

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  if (guess == false) {
    document.querySelector(
      ".message"
    ).textContent = `🚫 No input detected, please try again.`;
  }

  // If correct answer guessed.
  //It is placed before the score<=1 so that if the user enters the correct one at the last moment, it does not shows that the user lost.

  // win
  else if (guess == numberRandom) {
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }

    document.querySelector("body").style.background = "rgb(9,152,0)";
    document.querySelector(".number").textContent = numberRandom;
    document.querySelector(
      ".message"
    ).textContent = `You guessed it correctly! `;
  }

  // Lost
  else if (score <= 1) {
    score = 0;
    document.querySelector(".score").textContent = score;
    document.querySelector(
      ".message"
    ).textContent = ` lol you wild noob, a 5th grade kid plays better than you. Please die in despair.`;
  } else if (guess !== numberRandom) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent =
      guess < numberRandom
        ? `😓 Too low. try again.`
        : `😓 Too High. try again.`;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  numberRandom = Math.trunc(Math.random() * 20);
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.background = "#1a1a1a";
  document.querySelector(".message").textContent = `Input the number.`;
});
