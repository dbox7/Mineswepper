import createElement from './createElement';
import button from '../sounds/button.mp3';
import mine from '../sounds/mine.mp3';
import win from '../sounds/win.mp3';

let loaded = false;

export function loadMusic() {
  if (loaded) {
    return;
  }
  const buttonSound = createElement('audio', 'buttonSound');
  buttonSound.src = button;

  const mineSound = createElement('audio', 'mineSound');
  mineSound.src = mine;

  const winSound = createElement('audio', 'winSound');
  winSound.src = win;

  document.body.append(buttonSound, mineSound, winSound);
  loaded = true;
}

export function playMusic(type = 'button') {
  switch (type) {
    case 'button': {
      const buttonSound = document.querySelector('.buttonSound');
      buttonSound.play();
      break;
    }
    case 'win': {
      const winSound = document.querySelector('.winSound');
      winSound.play();
      break;
    }
    case 'mine': {
      const mineSound = document.querySelector('.mineSound');
      mineSound.play();
      break;
    }
    default:
      break;
  }
}

export function stopMusic() {
  const winSound = document.querySelector('.winSound');
  winSound.pause();
}
