'use strict';

let secretnumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretnumber) {
    document.querySelector('.message').textContent = '🎉 Corect Number!';
    document.querySelector('.number').textContent = secretnumber;
    document.querySelector('body').style.backgroundColor = 'green';
  } else if (guess > secretnumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '🎉 Too high!';
      score--;
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretnumber) {
    document.querySelector('.message').textContent = '🎉 Too low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretnumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
