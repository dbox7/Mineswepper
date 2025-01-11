import createElement from './createElement';
import { getDemension } from './convertIndex';

function drowHeader() {
  const container = createElement('div', 'container');

  const header = createElement('header', 'header');
  const headerLogo = createElement('section', 'header__logo');
  headerLogo.innerHTML = 'MINESWEPPER';

  const headerStat = createElement('section', 'header__stat');
  const headerTimer = createElement('div', 'header__timer');
  const headerSteps = createElement('div', 'header__steps');
  const flags = createElement('div', 'header__flags');
  const mines = createElement('div', 'header__mines');
  headerStat.append(headerTimer, headerSteps, flags, mines);
  header.append(headerLogo, headerStat);

  container.appendChild(header);

  return container;
}

export function drowScore(score) {
  const scoreBlock = createElement('dialog', 'score');
  const scoreTitle = createElement('h1', 'welcome__title');
  scoreTitle.innerHTML = 'Score';
  const scoreList = createElement('ol');
  score.forEach((item) => {
    const itemLi = createElement('li');
    itemLi.innerHTML = `Time: ${item.secs}s | Moves: ${item.steps}`;
    scoreList.appendChild(itemLi);
  });
  const scoreButton = createElement('button', 'button', 'main__score', 'score__close');
  scoreButton.innerHTML = 'Close';
  scoreBlock.append(scoreTitle, scoreList, scoreButton);
  const body = document.querySelector('body');
  body.appendChild(scoreBlock);
  scoreBlock.showModal();
}

export function drowBoard() {
  const welcome = document.querySelector('.welcome');
  const container = document.querySelector('.container');

  const demension = getDemension();

  const main = createElement('main', 'main');
  const mainBoard = createElement('selection', 'main__board');
  mainBoard.style.gridTemplateColumns = `repeat(${demension}, 1fr)`;
  mainBoard.style.gridTemplateRows = `repeat(${demension}, 1fr)`;

  for (let i = 0; i < demension ** 2; i += 1) {
    const cell = createElement('div', 'main__board-cell');
    mainBoard.appendChild(cell);
  }

  const mainButtons = createElement('div', 'main__buttons');
  const mainButton = createElement('button', 'button', 'main__button');
  mainButton.innerHTML = 'New Game';
  const scoreButton = createElement('button', 'button', 'main__score');
  scoreButton.innerHTML = 'Score';

  welcome.close();
  mainButtons.append(mainButton, scoreButton);
  main.append(mainBoard, mainButtons);

  container.append(main);

  const headerTimer = document.querySelector('.header__timer');
  const headerSteps = document.querySelector('.header__steps');
  headerTimer.innerHTML = 'Time: <span class="header__time">0:00</span>';
  headerSteps.innerHTML = 'Steps: 0';
}

export function drowWelcome() {
  const body = document.querySelector('body');

  const container = drowHeader();

  const welcome = createElement('dialog', 'welcome');
  const welcomeTitle = createElement('h1', 'welcome__title');
  welcomeTitle.innerHTML = 'Welcome!';

  const welcomeInfo = createElement('p', 'welcome__info');
  welcomeInfo.innerHTML = 'Lets find all hidden mines. Be careful – one wrong action and we would be killed! '
                            + 'Numbers in cells show you how many mines nearby. Focus on them. Good luck!';

  const welcomeDifficulty = createElement('div', 'welcome__diff');
  welcomeDifficulty.innerHTML = 'Choose difficulty';

  const welcomeSelect = createElement('div', 'welcome__select');
  welcomeSelect.innerHTML = `
    <div class="welcome__select-block">
      <label for="easy">Easy<br>(10x10)</label>
      <input type="radio" id="easy" class="welcome__select-radio" value="10" name="levels" checked>
    </div>
    <div class="welcome__select-block">
      <label for="middle">Middle<br>(15x15)</label>
      <input type="radio" id="middle" class="welcome__select-radio" value="15" name="levels">
    </div>
    <div class="welcome__select-block">
      <label for="hard">Hard<br>(20x20)</label>
      <input type="radio" id="hard" class="welcome__select-radio" value="20" name="levels">
    </div>`;

  const welcomeButton = createElement('button', 'button', 'welcome__button');
  welcomeButton.innerHTML = 'Play!';

  welcome.append(welcomeTitle, welcomeInfo, welcomeDifficulty, welcomeSelect, welcomeButton);

  body.append(welcome, container);
  welcome.showModal();
}
