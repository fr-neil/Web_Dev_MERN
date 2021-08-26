`use strict`;
let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
const color = `#222`;
let highscore = 0;

const displayMsg = function (message) {
  document.querySelector(`.message`).textContent = message;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  if (!guess) {
    displayMsg(`📛 No number`);
    document.querySelector(`body`).style.backgroundColor = `#014ff4`;
    document.querySelector(`body`).style.color = `#4e9a06`;
    document.querySelector(`.number`).textContent = `?`;
  } else if (guess === number) {
    displayMsg(`🎉 Correct answer!`);
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    document.querySelector(`body`).style.color = `#222222`;
    document.querySelector(`.number`).textContent = number;
    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  } else if (guess !== number) {
    if (score > 1) {
      displayMsg(guess > number ? `Your guess is high!` : `Your guess is low`);
      score--;
      document.querySelector(`.score`).textContent = score;
      document.querySelector(`body`).style.backgroundColor = color;
    } else {
      displayMsg(`You lost!`);
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `#014ff4`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  score = 20;
  document.querySelector(`.score`).textContent = score;
  number = Math.trunc(Math.random() * 20) + 1;
  displayMsg(`Start guessing`);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`body`).style.backgroundColor = color;
  document.querySelector(`.guess`).value = `null`;
});
