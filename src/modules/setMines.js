import { convertIndex } from './convertIndex';

export default function setMines(nMines, target = { x: -1, y: -1 }) {
  const minesIdx = [];
  for (let i = 0; i < nMines; i += 1) {
    let duplicate = false;
    let random = Math.random() * (nMines ** 2);
    random = Math.floor(random);
    random = convertIndex(random, nMines);
    minesIdx.forEach((item) => {
      if (item.x === random.x && item.y === random.y) {
        duplicate = true;
      }
    });
    if (duplicate || (target.x === random.x && target.y === random.y)) {
      i -= 1;
    } else {
      minesIdx.push(random);
    }
  }
  return minesIdx;
}
