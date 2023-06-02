import './style.scss';
import {
  drowWelcome,
  drowBoard,
  drowScore,
  drowSwitches,
} from './modules/drowPage';
import {
  getSteps,
  increaseSteps,
  startTimer,
  stopTimer,
} from './modules/timer';
import { convertIndex, getDemension } from './modules/convertIndex';
import { checkCell, checkFlags, isMined } from './modules/checkCell';
import setMines from './modules/setMines';
import endGame from './modules/endGame';
import { loadMusic, playMusic } from './modules/playMusic';

let timer;
let mines;
let flags;
let unrefusedMines;
let dark = false;

const darkTheme = [
  '.button',
  '.header',
  '.welcome',
  '.switch__block',
  '.switch',
  '.container',
  '.main__board',
  '.main__board-cell'];

function updateFlags(count) {
  const flagsBlock = document.querySelector('.header__flags');
  flags += count;
  flagsBlock.innerHTML = `Flags: ${flags}`;
}

function cellClick(event) {
  if (!event.target.classList.contains('checked')) {
    increaseSteps();
  }
  const steps = getSteps();
  const headerSteps = document.querySelector('.header__steps');
  headerSteps.innerHTML = `Steps: ${steps}`;

  const demension = getDemension();

  const cells = document.querySelector('.main__board').children;
  let openedCells = 0;
  const aim = demension ** 2 - demension;
  [...cells].forEach((cell) => {
    if (cell.classList.contains('checked')) {
      openedCells += 1;
    }
  });

  if (openedCells === aim - 1) {
    return endGame(timer, true);
  }

  let index = [...cells].indexOf(event.target);
  index = convertIndex(index);

  if (!mines) {
    mines = setMines(demension, index);
    console.log('Координаты мин для ускорения проверки:');
    console.log(mines);
  }

  const check = checkCell(index, mines, timer, flags);
  if (check === 1) {
    playMusic();
  } else if (check === 0) {
    playMusic('mine');
  }

  const count = checkFlags();
  if (count) {
    updateFlags(count);
  }

  return 0;
}

function cellRightClick(event) {
  event.preventDefault();

  const flagsBlock = document.querySelector('.header__flags');
  const minesBlock = document.querySelector('.header__mines');
  const cells = document.querySelector('.main__board').children;
  const cell = event.target;
  let index = [...cells].indexOf(event.target);
  index = convertIndex(index);

  if (cell.innerHTML === ''
  && flags > 0
  && mines
  && !cell.classList.contains('checked')) {
    cell.innerHTML = 'X';
    flags -= 1;
    flagsBlock.innerHTML = `Flags: ${flags}`;
    if (isMined(index, mines)) {
      unrefusedMines -= 1;
      minesBlock.innerHTML = `Mines: ${unrefusedMines}`;
    }
  } else if (cell.innerHTML === 'X') {
    cell.innerHTML = '';
    flags += 1;
    flagsBlock.innerHTML = `Flags: ${flags}`;
    if (isMined(index, mines)) {
      unrefusedMines += 1;
      minesBlock.innerHTML = `Mines: ${unrefusedMines}`;
    }
  }

  if (unrefusedMines === 0) {
    return endGame(timer, true);
  }

  cell.style.color = 'red';
  return 0;
}

function newGame() {
  stopTimer(timer);

  const main = document.querySelector('.main');
  main.remove();

  const welcome = document.querySelector('.welcome');
  welcome.showModal();
}

function score() {
  if (localStorage.score) {
    drowScore(JSON.parse(localStorage.score));
    const scoreClose = document.querySelector('.score__close');
    const scoreBlock = document.querySelector('.score');
    scoreClose.addEventListener('click', () => {
      scoreBlock.remove();
    });
    if (dark) {
      scoreBlock.classList.add('dark');
      scoreClose.classList.add('dark');
    } else {
      scoreBlock.classList.remove('dark');
      scoreClose.classList.remove('dark');
    }
  } else {
    alert('Win one time at least');
  }
}

function play() {
  loadMusic();
  if (dark) {
    drowBoard('dark');
  } else {
    drowBoard();
  }
  mines = 0;

  const demension = getDemension();
  flags = demension;
  unrefusedMines = demension;
  const flagsBlock = document.querySelector('.header__flags');
  const minesBlock = document.querySelector('.header__mines');
  flagsBlock.innerHTML = `Flags: ${flags}`;
  minesBlock.innerHTML = `Mines: ${unrefusedMines}`;

  const cells = document.querySelectorAll('.main__board-cell');
  cells.forEach((cell) => {
    cell.addEventListener('click', cellClick);
    cell.addEventListener('contextmenu', cellRightClick);
  });

  const mainButton = document.querySelector('.main__button');
  mainButton.addEventListener('click', newGame);
  const scoreButton = document.querySelector('.main__score');
  scoreButton.addEventListener('click', score);

  timer = startTimer();
}

function switchTheme() {
  if (!dark) {
    dark = true;
  } else {
    dark = false;
  }
  darkTheme.forEach((item) => {
    const elems = document.querySelectorAll(item);
    elems.forEach((elem) => {
      elem.classList.toggle('dark');
    });
  });
}

function init() {
  drowWelcome();
  const welcomeButton = document.querySelector('.welcome__button');
  welcomeButton.addEventListener('click', play);
  drowSwitches();
  const switch1 = document.querySelector('.switch__theme');
  switch1.addEventListener('change', switchTheme);
}

init();
