'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 50;
let hScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const number = function (number) {
  document.querySelector('.number').textContent = number;
};
const body = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const highScore = function (hscore) {
  document.querySelector('.highscore').textContent = hscore;
};
const scorejs = function (score) {
  document.querySelector('.score').textContent = score;
};
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage(`🔴 Nema broja!`);
  } else if (guess === secretNumber) {
    displayMessage(`🟢 Tačan broj!`);
    number(secretNumber);
    body('#60b347');
    highScore(hScore);
    if (score > hScore) {
      hScore = score;
    }
  } else if (-3 <= secretNumber - guess && secretNumber - guess <= 3) {
    if (score > 1) {
      displayMessage(`🌞 Vruće!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      message(`💥 Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else if (-10 <= secretNumber - guess && secretNumber - guess <= 10) {
    if (score > 1) {
      displayMessage(`🌞 Toplo!`);
      score--;
      scorejs(score);
    } else {
      message(`💥 Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else if (-25 <= secretNumber - guess && secretNumber - guess <= 25) {
    if (score > 1) {
      displayMessage(`❄️ Hladno!`);
      score--;
      scorejs(score);
    } else {
      message(`💥 Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else if (-50 <= secretNumber - guess && secretNumber - guess <= 50) {
    if (score > 1) {
      displayMessage(`⛄ Debeli minus!`);
      score--;
      scorejs(score);
    } else {
      message(`💥 Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else {
    if (score > 1) {
      displayMessage(`🥶 Ledeno doba!`);
      score--;
      scorejs(score);
    } else {
      message(`💥 Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  number('?');
  body('#222');
  displayMessage(`Start guessing...`);
  document.querySelector('.guess').value = '';
  scorejs(50);
  score = 50;
  // console.log(secretNumber, typeof secretNumber);
});
// console.log(secretNumber, typeof secretNumber);
