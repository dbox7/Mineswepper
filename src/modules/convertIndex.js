export function getDemension() {
  let levels = document.querySelectorAll('.welcome__select-radio');
  levels = [...levels].filter((item) => item.checked);
  const dimension = levels[0].value;
  return dimension;
}

export function convertIndex(index) {
  let res;
  const demension = getDemension();
  if (typeof index === 'number') {
    const x = index % demension;
    const y = Math.floor(index / demension);
    res = { x, y };
  } else {
    res = index.y * demension + index.x;
  }
  return res;
}
