const player0El = document.querySelector(`.player--0`);
const player1El = document.querySelector(`.player--1`);
const score0El = document.querySelector(`#score--0`);
const score1El = document.querySelector(`#score--1`);
const current0El = document.querySelector(`#current--0`);
const current1El = document.querySelector(`#current--1`);
const diceEl = document.querySelector(`.dice`);
const newbtn = document.querySelector(`.btn--new`);
const rollbtn = document.querySelector(`.btn--roll`);
const holdbtn = document.querySelector(`.btn--hold`);

let currentScore, activePlayer, scores, playing;

const init = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current0El.textContent = 0;
  diceEl.classList.add(`hidden`);
  player0El.classList.remove(`player--winner`);
  player1El.classList.remove(`player--winner`);
  player0El.classList.add(`player--active`);
  player1El.classList.remove(`player--active`);
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  player0El.classList.toggle(`player--active`);
  player1El.classList.toggle(`player--active`);
};

const winner = function () {
  playing = false;
  diceEl.classList.add(`hidden`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--winner`);
  document
    .querySelector(`.player--${activePlayer}`)
    .classList.add(`player--active`);
};

rollbtn.addEventListener(`click`, function () {
  if (playing) {
    let roll = Math.trunc(Math.random() * 6) + 1;
    diceEl.classList.remove(`hidden`);
    diceEl.src = `./src/dice-${roll}.png`;

    if (roll !== 1) {
      currentScore += roll;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

holdbtn.addEventListener(`click`, function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      winner();
    } else {
      switchPlayer();
    }
  }
});

newbtn.addEventListener(`click`, init);
