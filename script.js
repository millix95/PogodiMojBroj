'use strict';

let secretNumber = Math.trunc(Math.random() * 100) + 1;
let score = 50;
let hScore = 0;
// document.querySelector('.number').textContent = secretNumber;
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = `🔴 Nema broja!`;
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = `🟢 Tačan broj!`;
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    if (score > hScore) {
      hScore = score;
      document.querySelector('.highscore').textContent = hScore;
    }
  } else if (-3 <= secretNumber - guess && secretNumber - guess <= 3) {
    if (score > 1) {
      document.querySelector('.message').textContent = `🌞 Vruće!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `💥 Kraj igre! Osvojili ste ${hScore} bodova!`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (-10 <= secretNumber - guess && secretNumber - guess <= 10) {
    if (score > 1) {
      document.querySelector('.message').textContent = `🌞 Toplo!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `💥 Kraj igre! Osvojili ste ${hScore} bodova!`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (-25 <= secretNumber - guess && secretNumber - guess <= 25) {
    if (score > 1) {
      document.querySelector('.message').textContent = `❄️ Hladno!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `💥 Kraj igre! Osvojili ste ${hScore} bodova!`;
      document.querySelector('.score').textContent = 0;
    }
  } else if (-50 <= secretNumber - guess && secretNumber - guess <= 50) {
    if (score > 1) {
      document.querySelector('.message').textContent = `⛄ Debeli minus!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `💥 Kraj igre! Osvojili ste ${hScore} bodova!`;
      document.querySelector('.score').textContent = 0;
    }
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent = `🥶 Ledeno doba!`;
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector(
        '.message'
      ).textContent = `💥 Kraj igre! Osvojili ste ${hScore} bodova!`;
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.message').textContent = `Start guessing...`;
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 50;
  score = 50;
  // console.log(secretNumber, typeof secretNumber);
});
// console.log(secretNumber, typeof secretNumber);
