'use strict';

//random secretNumber from
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

let highScore = 0;
//seeting message function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there is no input
  if (!guess) {
    displayMessage('No Number here😮');
  } else if (guess === secretNumber) {
    //when palyer wins
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Winner! Correct number🎉');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //check high score
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =

      displayMessage(guess > secretNumber ? 'Too high📈' : 'Too low📉');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💣 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }

  //play again
  document.querySelector('.again').addEventListener('click', function () {
    //initial values
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing');
    document.querySelector('.score').textContent = score;
    //restore the original background color & number width
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
  });
});
