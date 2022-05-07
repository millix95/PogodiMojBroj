'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 15;
let hScore = 0;
const igra = document.querySelector('.igra');
const pravila = document.querySelector('.pravila');
const pravilaDugme = document.querySelector('.pravila-dugme');

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
const proveraF = function () {
  let guess = Number(document.querySelector('.guess').value);
  let guess2 = document.querySelector('.guess');
  if (!guess) {
    displayMessage(`Nema broja!`);
    document.querySelector('.message').style.color = '#F60';
    document.querySelector('.number').textContent = '?';
  } else if (guess === secretNumber) {
    if (score > hScore) {
      hScore = score;
    }
    document.querySelector('.check').style.display = 'none';
    document.querySelector('.again').style.display = 'block';
    displayMessage(`Tačan broj!`);
    number(guess);
    document.querySelector('.number').style.color = '#eee';
    document.querySelector('.number').style.backgroundColor = '#60b347';
    document.querySelector('.message').style.color = '#60b347';
    guess2.disabled = true;
    // body('#60b347');
    highScore(hScore);
    // guess2.value = '';
  } else if (-3 <= secretNumber - guess && secretNumber - guess <= 3) {
    if (score > 1) {
      displayMessage(`Vruće!`);
      score--;
      document.querySelector('.score').textContent = score;
      number(guess);
      document.querySelector('.number').style.color = '#80CED7';
      document.querySelector('.number').style.backgroundColor = '#003249';
      document.querySelector('.message').style.color = '#003249';
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      document.querySelector('.message').style.color = '#F00';
      scorejs(0);
    }
  } else if (-10 <= secretNumber - guess && secretNumber - guess <= 10) {
    if (score > 1) {
      displayMessage(`Toplo!`);
      score--;
      scorejs(score);
      number(guess);
      document.querySelector('.number').style.color = '#9AD1D4';
      document.querySelector('.number').style.backgroundColor = '#007EA7';
      document.querySelector('.message').style.color = '#007EA7';
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      document.querySelector('.message').style.color = '#F00';
      scorejs(0);
    }
  } else if (-25 <= secretNumber - guess && secretNumber - guess <= 25) {
    if (score > 1) {
      displayMessage(`Hladno!`);
      score--;
      scorejs(score);
      number(guess);
      document.querySelector('.number').style.color = '#CCDBDC';
      document.querySelector('.number').style.backgroundColor = '#80CED7';
      document.querySelector('.message').style.color = '#60b80CED7347';
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      document.querySelector('.message').style.color = '#F00';
      scorejs(0);
    }
  } else if (-50 <= secretNumber - guess && secretNumber - guess <= 50) {
    if (score > 1) {
      displayMessage(`Debeli minus!`);
      score--;
      scorejs(score);
      number(guess);
      document.querySelector('.number').style.color = '#003249';
      document.querySelector('.number').style.backgroundColor = '#9AD1D4';
      document.querySelector('.message').style.color = '#9AD1D4';
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      document.querySelector('.message').style.color = '#F00';
      scorejs(0);
    }
  } else {
    if (score > 1) {
      displayMessage(`Ledeno doba!`);
      score--;
      scorejs(score);
      number(guess);
      document.querySelector('.number').style.color = '#007EA7';
      document.querySelector('.number').style.backgroundColor = '#CCDBDC';
      document.querySelector('.message').style.color = '#CCDBDC';
    } else {
      displayMessage(`Kraj igre! Osvojili ste ${hScore} bodova!`);
      document.querySelector('.message').style.color = '#F00';
      scorejs(0);
    }
  }
  // console.log(guess);
};
document.querySelector('.check').style.display = 'block';
document.querySelector('.again').style.display = 'none';
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  // let provera = document.querySelector('.guess');
  proveraF();
  number(provera);
  // provera.value = '';
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  let guess2 = document.querySelector('.guess');
  number(`?`);
  body('#222');
  displayMessage(`Počni pogađati...`);
  document.querySelector('.guess').value = '';
  scorejs(15);
  score = 15;
  document.querySelector('.check').style.display = 'flex';
  document.querySelector('.again').style.display = 'none';
  document.querySelector('.guess').style.top = '0px';
  document.querySelector('.number').style.color = '#333';
  document.querySelector('.number').style.backgroundColor = '#eee';
  document.querySelector('.message').style.color = '#eee';
  guess2.disabled = false;

  // console.log(secretNumber, typeof secretNumber);
});
// console.log(secretNumber, typeof secretNumber);
pravilaDugme.addEventListener('click', function () {
  igra.classList.remove('skriveno');
  pravila.classList.add('skriveno');
});
document.addEventListener('keydown', function (e) {
  let provera = document.querySelector('.guess');

  if (e.key === 'Enter' && provera === document.activeElement) {
    proveraF();
    number(provera.value);
    provera.value = '';
  }
});
