'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 15;
let hScore = 0;
const igra = document.querySelector('.igra');
const pravila = document.querySelector('.pravila');
const pravilaDugme = document.querySelector('.pravila-dugme');
const provera = document.querySelector('.guess');
const proveraF = function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    displayMessage(`Nema broja!`);
  } else if (guess === secretNumber) {
    if (score > hScore) {
      hScore = score;
    }
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
    displayMessage(`Tačan broj!`);
    number(secretNumber);
    body('#60b347');
    highScore(hScore);
  } else if (-3 <= secretNumber - guess && secretNumber - guess <= 3) {
    if (score > 1) {
      displayMessage(`Vruće!`);
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else if (-10 <= secretNumber - guess && secretNumber - guess <= 10) {
    if (score > 1) {
      displayMessage(`Toplo!`);
      score--;
      scorejs(score);
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else if (-25 <= secretNumber - guess && secretNumber - guess <= 25) {
    if (score > 1) {
      displayMessage(`Hladno!`);
      score--;
      scorejs(score);
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else if (-50 <= secretNumber - guess && secretNumber - guess <= 50) {
    if (score > 1) {
      displayMessage(`Debeli minus!`);
      score--;
      scorejs(score);
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  } else {
    if (score > 1) {
      displayMessage(`Ledeno doba!`);
      score--;
      scorejs(score);
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      scorejs(0);
    }
  }
};
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
const again = function (text) {
  document.querySelector('.again').textContent = text;
};
const check = function (text) {
  document.querySelector('.check').textContent = text;
};
document.querySelector('.check').style.display = 'block';
document.querySelector('.again').style.display = 'none';
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', proveraF);

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  number(`?`);
  body('#222');
  displayMessage(`Počni pogađati...`);
  document.querySelector('.guess').value = '';
  scorejs(15);
  score = 15;
  document.querySelector('.check').style.display = 'flex';
  document.querySelector('.again').style.display = 'none';
  document.querySelector('.guess').style.top = '0px';
  // console.log(secretNumber, typeof secretNumber);
});
// console.log(secretNumber, typeof secretNumber);
pravilaDugme.addEventListener('click', function () {
  igra.classList.remove('skriveno');
  pravila.classList.add('skriveno');
});
document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter' && provera === document.activeElement) {
    proveraF();
  }
});
