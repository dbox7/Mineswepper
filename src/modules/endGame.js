import createElement from './createElement';
import { playMusic, stopMusic } from './playMusic';
import { getSteps, getTime, stopTimer } from './timer';

let txtInfo;

function hideBlocks() {
  const welcomeSelect = document.querySelector('.welcome__select');
  welcomeSelect.classList.toggle('hidden');
  const welcomeDifficulty = document.querySelector('.welcome__diff');
  welcomeDifficulty.classList.toggle('hidden');
  const welcomeButton = document.querySelector('.welcome__button');
  welcomeButton.classList.toggle('hidden');
}

function newGame() {
  stopMusic();
  const main = document.querySelector('.main');
  main.remove();

  const welcomeTitle = document.querySelector('.welcome__title');
  welcomeTitle.innerHTML = 'Welcome!';
  const welcomeInfo = document.querySelector('.welcome__info');
  welcomeInfo.innerHTML = txtInfo;

  const endButton = document.querySelector('.end__button');
  endButton.remove();

  hideBlocks();
}

export default function endGame(timer, win = false) {
  stopTimer(timer);
  const welcome = document.querySelector('.welcome');
  const welcomeInfo = document.querySelector('.welcome__info');
  const welcomeTitle = document.querySelector('.welcome__title');
  txtInfo = document.querySelector('.welcome__info').innerHTML;
  hideBlocks();

  const time = getTime();
  const steps = getSteps();
  const secs = time.minute * 60 + time.sec;
  if (win) {
    playMusic('win');
    welcomeTitle.innerHTML = 'You win!';
    welcomeInfo.innerHTML = `Hooray! You found all mines in ${secs} seconds and ${steps} moves!`;
    let score;
    if (localStorage.score) {
      score = JSON.parse(localStorage.score);
    } else {
      score = [];
    }
    score.unshift({ secs, steps });
    score = score.slice(0, 10);
    localStorage.score = JSON.stringify(score);
  } else {
    playMusic('mine');
    welcomeTitle.innerHTML = 'You lose!';
    welcomeInfo.innerHTML = 'Game over. Try again';
  }

  const endButton = createElement('button', 'button', 'welcome__button', 'end__button');
  endButton.innerHTML = 'Play again';
  endButton.addEventListener('click', newGame);

  welcome.appendChild(endButton);
  welcome.showModal();
}
