'use strict';
/* Project: Guess My Number! */

/* Mendefinisikan Secret Number diluar fungsi Handler */
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

/* Menambahkan Event Listener Tombol 'Check' */
document.querySelector('.check').addEventListener('click', function () {
  // Konversi String ke Number
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // SKENARIO: Ketika tidak ada input
  if (!guess) {
    document.querySelector('.message').textContent = '🚫 No number!';

    // SKENARIO: Ketika player menang
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    /* Manipulasi CSS Styles */
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // Implement Highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // SKENARIO: Ketika tebakan terlalu tinggi
  } else if (guess > secretNumber) {
    // Game Over
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--; // SKENARIO: Ketika tebakan salah, score -1.
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
    // SKENARIO: Ketika tebakan terlalu rendah
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--; // SKENARIO: Ketika tebakan salah, score -1.
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

/* Implement a game reset functionality, so that the player can make a new guess! */
/* Menambahkan Event Listener Tombol 'Again' */
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
///////////////////////////////////////
