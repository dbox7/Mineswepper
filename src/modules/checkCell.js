import { convertIndex, getDemension } from './convertIndex';
import endGame from './endGame';

let flags = 0;

export function checkFlags(count = false) {
  if (count) {
    flags += 1;
  } else {
    const res = flags;
    flags = 0;
    return res;
  }
  return 0;
}

export function isMined(cell, mines) {
  let thisMine = false;
  mines.forEach((mine) => {
    if (cell.x === mine.x
      && cell.y === mine.y) {
      thisMine = true;
    }
  });
  return thisMine;
}

function changeCell(coordinates, nMinesNear) {
  const cells = document.querySelector('.main__board').children;
  const index = convertIndex(coordinates);

  if (cells[index].innerHTML === 'X') {
    checkFlags(true);
  }

  if (nMinesNear > 0) {
    cells[index].innerHTML = nMinesNear;
    cells[index].classList.add('checked');
    cells[index].style.background = `rgb(255, ${255 - (nMinesNear * 30)}, 48)`;
  } else {
    cells[index].classList.add('checked');
    cells[index].innerHTML = '';
  }
  return 0;
}

function isValid(target, demension) {
  return (target.x >= 0
    && target.x < demension
    && target.y >= 0
    && target.y < demension);
}

function isChecked(coordinates) {
  const cells = document.querySelector('.main__board').children;
  const index = convertIndex(coordinates);
  return cells[index].classList.contains('checked');
}

function checkNeibours(target, mines) {
  let count = 0;
  for (let i = -1; i <= 1; i += 1) {
    for (let j = -1; j <= 1; j += 1) {
      if (i !== 0 || j !== 0) {
        const neibour = { x: target.x + i, y: target.y + j };
        if (isMined(neibour, mines)) {
          count += 1;
        }
      }
    }
  }
  return count;
}

export function checkCell(target, mines, timer) {
  const demension = getDemension();

  if (!isValid(target, demension)) {
    return 1;
  }

  if (isChecked(target)) {
    return -1;
  }

  if (isMined(target, mines)) {
    endGame(timer);
    return 0;
  }

  const count = checkNeibours(target, mines);
  changeCell(target, count);

  if (count === 0) {
    for (let i = -1; i <= 1; i += 1) {
      for (let j = -1; j <= 1; j += 1) {
        if (i !== 0 || j !== 0) {
          const neibour = { x: target.x + i, y: target.y + j };
          checkCell(neibour, mines, timer);
        }
      }
    }
  }
  return 1;
}
