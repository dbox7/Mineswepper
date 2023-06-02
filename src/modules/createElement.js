export default function createElement(block, ...blockClass) {
  const res = document.createElement(block);
  blockClass.forEach((item) => {
    res.classList.add(item);
  });
  return res;
}
