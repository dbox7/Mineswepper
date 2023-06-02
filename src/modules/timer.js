let sec;
let minute;
let steps;

export function startTimer() {
  sec = 0;
  minute = 0;
  steps = 0;
  const timerBlock = document.querySelector('.header__time');

  function updateTime() {
    sec += 1;
    if (sec === 60) {
      minute += 1;
      sec = 0;
      if (minute === 60) {
        sec = 0;
        minute = 0;
      }
    }

    if (sec < 10) {
      timerBlock.innerHTML = `${minute}:0${sec}`;
    } else {
      timerBlock.innerHTML = `${minute}:${sec}`;
    }
  }

  return setInterval(updateTime, 1000);
}

export function stopTimer(timer) {
  clearInterval(timer);
}

export function increaseSteps() {
  steps += 1;
}

export function getTime() {
  return { minute, sec };
}

export function getSteps() {
  return steps;
}
