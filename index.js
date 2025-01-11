/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://mineswepper/./src/style.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _modules_drowPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/drowPage */ \"./src/modules/drowPage.js\");\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/timer */ \"./src/modules/timer.js\");\n/* harmony import */ var _modules_convertIndex__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/convertIndex */ \"./src/modules/convertIndex.js\");\n/* harmony import */ var _modules_checkCell__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/checkCell */ \"./src/modules/checkCell.js\");\n/* harmony import */ var _modules_setMines__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/setMines */ \"./src/modules/setMines.js\");\n/* harmony import */ var _modules_endGame__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/endGame */ \"./src/modules/endGame.js\");\n/* harmony import */ var _modules_playMusic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/playMusic */ \"./src/modules/playMusic.js\");\n\n\n\n\n\n\n\n\n\nlet timer;\nlet mines;\nlet flags;\nlet unrefusedMines;\n\nfunction updateFlags(count) {\n  const flagsBlock = document.querySelector('.header__flags');\n  flags += count;\n  flagsBlock.innerHTML = `Flags: ${flags}`;\n}\n\nfunction cellClick(event) {\n  if (!event.target.classList.contains('checked')) {\n    (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.increaseSteps)();\n  }\n  const steps = (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.getSteps)();\n  const headerSteps = document.querySelector('.header__steps');\n  headerSteps.innerHTML = `Steps: ${steps}`;\n\n  const demension = (0,_modules_convertIndex__WEBPACK_IMPORTED_MODULE_3__.getDemension)();\n\n  const cells = document.querySelector('.main__board').children;\n  let openedCells = 0;\n  const aim = demension ** 2 - demension;\n  [...cells].forEach((cell) => {\n    if (cell.classList.contains('checked')) {\n      openedCells += 1;\n    }\n  });\n\n  if (openedCells === aim - 1) {\n    return (0,_modules_endGame__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(timer, true);\n  }\n\n  let index = [...cells].indexOf(event.target);\n  index = (0,_modules_convertIndex__WEBPACK_IMPORTED_MODULE_3__.convertIndex)(index);\n\n  if (!mines) {\n    mines = (0,_modules_setMines__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(demension, index);\n    console.log('Координаты мин для ускорения проверки:');\n    console.log(mines);\n  }\n\n  const check = (0,_modules_checkCell__WEBPACK_IMPORTED_MODULE_4__.checkCell)(index, mines, timer, flags);\n  if (check === 1) {\n    (0,_modules_playMusic__WEBPACK_IMPORTED_MODULE_7__.playMusic)();\n  } else if (check === 0) {\n    (0,_modules_playMusic__WEBPACK_IMPORTED_MODULE_7__.playMusic)('mine');\n  }\n\n  const count = (0,_modules_checkCell__WEBPACK_IMPORTED_MODULE_4__.checkFlags)();\n  if (count) {\n    updateFlags(count);\n  }\n\n  return 0;\n}\n\nfunction cellRightClick(event) {\n  event.preventDefault();\n\n  const flagsBlock = document.querySelector('.header__flags');\n  const minesBlock = document.querySelector('.header__mines');\n  const cells = document.querySelector('.main__board').children;\n  const cell = event.target;\n  let index = [...cells].indexOf(event.target);\n  index = (0,_modules_convertIndex__WEBPACK_IMPORTED_MODULE_3__.convertIndex)(index);\n\n  if (cell.innerHTML === ''\n  && flags > 0\n  && mines\n  && !cell.classList.contains('checked')) {\n    cell.innerHTML = 'X';\n    flags -= 1;\n    flagsBlock.innerHTML = `Flags: ${flags}`;\n    if ((0,_modules_checkCell__WEBPACK_IMPORTED_MODULE_4__.isMined)(index, mines)) {\n      unrefusedMines -= 1;\n      minesBlock.innerHTML = `Mines: ${unrefusedMines}`;\n    }\n  } else if (cell.innerHTML === 'X') {\n    cell.innerHTML = '';\n    flags += 1;\n    flagsBlock.innerHTML = `Flags: ${flags}`;\n    if ((0,_modules_checkCell__WEBPACK_IMPORTED_MODULE_4__.isMined)(index, mines)) {\n      unrefusedMines += 1;\n      minesBlock.innerHTML = `Mines: ${unrefusedMines}`;\n    }\n  }\n\n  if (unrefusedMines === 0) {\n    return (0,_modules_endGame__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(timer, true);\n  }\n  return 0;\n}\n\nfunction newGame() {\n  (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.stopTimer)(timer);\n\n  const main = document.querySelector('.main');\n  main.remove();\n\n  const welcome = document.querySelector('.welcome');\n  welcome.showModal();\n}\n\nfunction score() {\n  if (localStorage.score) {\n    (0,_modules_drowPage__WEBPACK_IMPORTED_MODULE_1__.drowScore)(JSON.parse(localStorage.score));\n    const scoreClose = document.querySelector('.score__close');\n    const scoreBlock = document.querySelector('.score');\n    scoreClose.addEventListener('click', () => {\n      scoreBlock.remove();\n    });\n  } else {\n    alert('Win one time at least');\n  }\n}\n\nfunction play() {\n  (0,_modules_playMusic__WEBPACK_IMPORTED_MODULE_7__.loadMusic)();\n  (0,_modules_drowPage__WEBPACK_IMPORTED_MODULE_1__.drowBoard)();\n  mines = 0;\n\n  const demension = (0,_modules_convertIndex__WEBPACK_IMPORTED_MODULE_3__.getDemension)();\n  flags = demension;\n  unrefusedMines = demension;\n  const flagsBlock = document.querySelector('.header__flags');\n  const minesBlock = document.querySelector('.header__mines');\n  flagsBlock.innerHTML = `Flags: ${flags}`;\n  minesBlock.innerHTML = `Mines: ${unrefusedMines}`;\n\n  const cells = document.querySelectorAll('.main__board-cell');\n  cells.forEach((cell) => {\n    cell.addEventListener('click', cellClick);\n    cell.addEventListener('contextmenu', cellRightClick);\n  });\n\n  const mainButton = document.querySelector('.main__button');\n  mainButton.addEventListener('click', newGame);\n  const scoreButton = document.querySelector('.main__score');\n  scoreButton.addEventListener('click', score);\n\n  timer = (0,_modules_timer__WEBPACK_IMPORTED_MODULE_2__.startTimer)();\n}\n\nfunction init() {\n  (0,_modules_drowPage__WEBPACK_IMPORTED_MODULE_1__.drowWelcome)();\n  const welcomeButton = document.querySelector('.welcome__button');\n  welcomeButton.addEventListener('click', play);\n}\n\ninit();\n\n\n//# sourceURL=webpack://mineswepper/./src/index.js?");

/***/ }),

/***/ "./src/modules/checkCell.js":
/*!**********************************!*\
  !*** ./src/modules/checkCell.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"checkCell\": () => (/* binding */ checkCell),\n/* harmony export */   \"checkFlags\": () => (/* binding */ checkFlags),\n/* harmony export */   \"isMined\": () => (/* binding */ isMined)\n/* harmony export */ });\n/* harmony import */ var _convertIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertIndex */ \"./src/modules/convertIndex.js\");\n/* harmony import */ var _endGame__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./endGame */ \"./src/modules/endGame.js\");\n\n\n\nlet flags = 0;\n\nfunction checkFlags(count = false) {\n  if (count) {\n    flags += 1;\n  } else {\n    const res = flags;\n    flags = 0;\n    return res;\n  }\n  return 0;\n}\n\nfunction isMined(cell, mines) {\n  let thisMine = false;\n  mines.forEach((mine) => {\n    if (cell.x === mine.x\n      && cell.y === mine.y) {\n      thisMine = true;\n    }\n  });\n  return thisMine;\n}\n\nfunction changeCell(coordinates, nMinesNear) {\n  const cells = document.querySelector('.main__board').children;\n  const index = (0,_convertIndex__WEBPACK_IMPORTED_MODULE_0__.convertIndex)(coordinates);\n\n  if (cells[index].innerHTML === 'X') {\n    checkFlags(true);\n  }\n\n  if (nMinesNear > 0) {\n    cells[index].innerHTML = nMinesNear;\n    cells[index].classList.add('checked');\n    cells[index].style.background = `rgb(255, ${255 - (nMinesNear * 30)}, 48)`;\n  } else {\n    cells[index].classList.add('checked');\n    cells[index].innerHTML = '';\n  }\n  return 0;\n}\n\nfunction isValid(target, demension) {\n  return (target.x >= 0\n    && target.x < demension\n    && target.y >= 0\n    && target.y < demension);\n}\n\nfunction isChecked(coordinates) {\n  const cells = document.querySelector('.main__board').children;\n  const index = (0,_convertIndex__WEBPACK_IMPORTED_MODULE_0__.convertIndex)(coordinates);\n  return cells[index].classList.contains('checked');\n}\n\nfunction checkNeibours(target, mines) {\n  let count = 0;\n  for (let i = -1; i <= 1; i += 1) {\n    for (let j = -1; j <= 1; j += 1) {\n      if (i !== 0 || j !== 0) {\n        const neibour = { x: target.x + i, y: target.y + j };\n        if (isMined(neibour, mines)) {\n          count += 1;\n        }\n      }\n    }\n  }\n  return count;\n}\n\nfunction checkCell(target, mines, timer) {\n  const demension = (0,_convertIndex__WEBPACK_IMPORTED_MODULE_0__.getDemension)();\n\n  if (!isValid(target, demension)) {\n    return 1;\n  }\n\n  if (isChecked(target)) {\n    return -1;\n  }\n\n  if (isMined(target, mines)) {\n    (0,_endGame__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(timer);\n    return 0;\n  }\n\n  const count = checkNeibours(target, mines);\n  changeCell(target, count);\n\n  if (count === 0) {\n    for (let i = -1; i <= 1; i += 1) {\n      for (let j = -1; j <= 1; j += 1) {\n        if (i !== 0 || j !== 0) {\n          const neibour = { x: target.x + i, y: target.y + j };\n          checkCell(neibour, mines, timer);\n        }\n      }\n    }\n  }\n  return 1;\n}\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/checkCell.js?");

/***/ }),

/***/ "./src/modules/convertIndex.js":
/*!*************************************!*\
  !*** ./src/modules/convertIndex.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"convertIndex\": () => (/* binding */ convertIndex),\n/* harmony export */   \"getDemension\": () => (/* binding */ getDemension)\n/* harmony export */ });\nfunction getDemension() {\r\n  let levels = document.querySelectorAll('.welcome__select-radio');\r\n  levels = [...levels].filter((item) => item.checked);\r\n  const dimension = levels[0].value;\r\n  return dimension;\r\n}\r\n\r\nfunction convertIndex(index) {\r\n  let res;\r\n  const demension = getDemension();\r\n  if (typeof index === 'number') {\r\n    const x = index % demension;\r\n    const y = Math.floor(index / demension);\r\n    res = { x, y };\r\n  } else {\r\n    res = index.y * demension + index.x;\r\n  }\r\n  return res;\r\n}\r\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/convertIndex.js?");

/***/ }),

/***/ "./src/modules/createElement.js":
/*!**************************************!*\
  !*** ./src/modules/createElement.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createElement)\n/* harmony export */ });\nfunction createElement(block, ...blockClass) {\r\n  const res = document.createElement(block);\r\n  blockClass.forEach((item) => {\r\n    res.classList.add(item);\r\n  });\r\n  return res;\r\n}\r\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/createElement.js?");

/***/ }),

/***/ "./src/modules/drowPage.js":
/*!*********************************!*\
  !*** ./src/modules/drowPage.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"drowBoard\": () => (/* binding */ drowBoard),\n/* harmony export */   \"drowScore\": () => (/* binding */ drowScore),\n/* harmony export */   \"drowWelcome\": () => (/* binding */ drowWelcome)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/modules/createElement.js\");\n/* harmony import */ var _convertIndex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./convertIndex */ \"./src/modules/convertIndex.js\");\n\r\n\r\n\r\nfunction drowHeader() {\r\n  const container = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'container');\r\n\r\n  const header = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('header', 'header');\r\n  const headerLogo = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('section', 'header__logo');\r\n  headerLogo.innerHTML = 'MINESWEPPER';\r\n\r\n  const headerStat = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('section', 'header__stat');\r\n  const headerTimer = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'header__timer');\r\n  const headerSteps = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'header__steps');\r\n  const flags = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'header__flags');\r\n  const mines = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'header__mines');\r\n  headerStat.append(headerTimer, headerSteps, flags, mines);\r\n  header.append(headerLogo, headerStat);\r\n\r\n  container.appendChild(header);\r\n\r\n  return container;\r\n}\r\n\r\nfunction drowScore(score) {\r\n  const scoreBlock = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('dialog', 'score');\r\n  const scoreTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'welcome__title');\r\n  scoreTitle.innerHTML = 'Score';\r\n  const scoreList = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('ol');\r\n  score.forEach((item) => {\r\n    const itemLi = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('li');\r\n    itemLi.innerHTML = `Time: ${item.secs}s | Moves: ${item.steps}`;\r\n    scoreList.appendChild(itemLi);\r\n  });\r\n  const scoreButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'button', 'main__score', 'score__close');\r\n  scoreButton.innerHTML = 'Close';\r\n  scoreBlock.append(scoreTitle, scoreList, scoreButton);\r\n  const body = document.querySelector('body');\r\n  body.appendChild(scoreBlock);\r\n  scoreBlock.showModal();\r\n}\r\n\r\nfunction drowBoard() {\r\n  const welcome = document.querySelector('.welcome');\r\n  const container = document.querySelector('.container');\r\n\r\n  const demension = (0,_convertIndex__WEBPACK_IMPORTED_MODULE_1__.getDemension)();\r\n\r\n  const main = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('main', 'main');\r\n  const mainBoard = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('selection', 'main__board');\r\n  mainBoard.style.gridTemplateColumns = `repeat(${demension}, 1fr)`;\r\n  mainBoard.style.gridTemplateRows = `repeat(${demension}, 1fr)`;\r\n\r\n  for (let i = 0; i < demension ** 2; i += 1) {\r\n    const cell = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main__board-cell');\r\n    mainBoard.appendChild(cell);\r\n  }\r\n\r\n  const mainButtons = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'main__buttons');\r\n  const mainButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'button', 'main__button');\r\n  mainButton.innerHTML = 'New Game';\r\n  const scoreButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'button', 'main__score');\r\n  scoreButton.innerHTML = 'Score';\r\n\r\n  welcome.close();\r\n  mainButtons.append(mainButton, scoreButton);\r\n  main.append(mainBoard, mainButtons);\r\n\r\n  container.append(main);\r\n\r\n  const headerTimer = document.querySelector('.header__timer');\r\n  const headerSteps = document.querySelector('.header__steps');\r\n  headerTimer.innerHTML = 'Time: <span class=\"header__time\">0:00</span>';\r\n  headerSteps.innerHTML = 'Steps: 0';\r\n}\r\n\r\nfunction drowWelcome() {\r\n  const body = document.querySelector('body');\r\n\r\n  const container = drowHeader();\r\n\r\n  const welcome = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('dialog', 'welcome');\r\n  const welcomeTitle = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('h1', 'welcome__title');\r\n  welcomeTitle.innerHTML = 'Welcome!';\r\n\r\n  const welcomeInfo = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('p', 'welcome__info');\r\n  welcomeInfo.innerHTML = 'Lets find all hidden mines. Be careful – one wrong action and we would be killed! '\r\n                            + 'Numbers in cells show you how many mines nearby. Focus on them. Good luck!';\r\n\r\n  const welcomeDifficulty = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'welcome__diff');\r\n  welcomeDifficulty.innerHTML = 'Choose difficulty';\r\n\r\n  const welcomeSelect = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('div', 'welcome__select');\r\n  welcomeSelect.innerHTML = `\r\n    <div class=\"welcome__select-block\">\r\n      <label for=\"easy\">Easy<br>(10x10)</label>\r\n      <input type=\"radio\" id=\"easy\" class=\"welcome__select-radio\" value=\"10\" name=\"levels\" checked>\r\n    </div>\r\n    <div class=\"welcome__select-block\">\r\n      <label for=\"middle\">Middle<br>(15x15)</label>\r\n      <input type=\"radio\" id=\"middle\" class=\"welcome__select-radio\" value=\"15\" name=\"levels\">\r\n    </div>\r\n    <div class=\"welcome__select-block\">\r\n      <label for=\"hard\">Hard<br>(20x20)</label>\r\n      <input type=\"radio\" id=\"hard\" class=\"welcome__select-radio\" value=\"20\" name=\"levels\">\r\n    </div>`;\r\n\r\n  const welcomeButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'button', 'welcome__button');\r\n  welcomeButton.innerHTML = 'Play!';\r\n\r\n  welcome.append(welcomeTitle, welcomeInfo, welcomeDifficulty, welcomeSelect, welcomeButton);\r\n\r\n  body.append(welcome, container);\r\n  welcome.showModal();\r\n}\r\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/drowPage.js?");

/***/ }),

/***/ "./src/modules/endGame.js":
/*!********************************!*\
  !*** ./src/modules/endGame.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ endGame)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/modules/createElement.js\");\n/* harmony import */ var _playMusic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./playMusic */ \"./src/modules/playMusic.js\");\n/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer */ \"./src/modules/timer.js\");\n\n\n\n\nlet txtInfo;\n\nfunction hideBlocks() {\n  const welcomeSelect = document.querySelector('.welcome__select');\n  welcomeSelect.classList.toggle('hidden');\n  const welcomeDifficulty = document.querySelector('.welcome__diff');\n  welcomeDifficulty.classList.toggle('hidden');\n  const welcomeButton = document.querySelector('.welcome__button');\n  welcomeButton.classList.toggle('hidden');\n}\n\nfunction newGame() {\n  (0,_playMusic__WEBPACK_IMPORTED_MODULE_1__.stopMusic)();\n  const main = document.querySelector('.main');\n  main.remove();\n\n  const welcomeTitle = document.querySelector('.welcome__title');\n  welcomeTitle.innerHTML = 'Welcome!';\n  const welcomeInfo = document.querySelector('.welcome__info');\n  welcomeInfo.innerHTML = txtInfo;\n\n  const endButton = document.querySelector('.end__button');\n  endButton.remove();\n\n  hideBlocks();\n}\n\nfunction endGame(timer, win = false) {\n  (0,_timer__WEBPACK_IMPORTED_MODULE_2__.stopTimer)(timer);\n  const welcome = document.querySelector('.welcome');\n  const welcomeInfo = document.querySelector('.welcome__info');\n  const welcomeTitle = document.querySelector('.welcome__title');\n  txtInfo = document.querySelector('.welcome__info').innerHTML;\n  hideBlocks();\n\n  const time = (0,_timer__WEBPACK_IMPORTED_MODULE_2__.getTime)();\n  const steps = (0,_timer__WEBPACK_IMPORTED_MODULE_2__.getSteps)();\n  const secs = time.minute * 60 + time.sec;\n  if (win) {\n    (0,_playMusic__WEBPACK_IMPORTED_MODULE_1__.playMusic)('win');\n    welcomeTitle.innerHTML = 'You win!';\n    welcomeInfo.innerHTML = `Hooray! You found all mines in ${secs} seconds and ${steps} moves!`;\n    let score;\n    if (localStorage.score) {\n      score = JSON.parse(localStorage.score);\n    } else {\n      score = [];\n    }\n    score.unshift({ secs, steps });\n    score = score.slice(0, 10);\n    localStorage.score = JSON.stringify(score);\n  } else {\n    (0,_playMusic__WEBPACK_IMPORTED_MODULE_1__.playMusic)('mine');\n    welcomeTitle.innerHTML = 'You lose!';\n    welcomeInfo.innerHTML = 'Game over. Try again';\n  }\n\n  const endButton = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('button', 'button', 'welcome__button', 'end__button');\n  endButton.innerHTML = 'Play again';\n  endButton.addEventListener('click', newGame);\n\n  welcome.appendChild(endButton);\n  welcome.showModal();\n}\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/endGame.js?");

/***/ }),

/***/ "./src/modules/playMusic.js":
/*!**********************************!*\
  !*** ./src/modules/playMusic.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadMusic\": () => (/* binding */ loadMusic),\n/* harmony export */   \"playMusic\": () => (/* binding */ playMusic),\n/* harmony export */   \"stopMusic\": () => (/* binding */ stopMusic)\n/* harmony export */ });\n/* harmony import */ var _createElement__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./createElement */ \"./src/modules/createElement.js\");\n/* harmony import */ var _sounds_button_mp3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sounds/button.mp3 */ \"./src/sounds/button.mp3\");\n/* harmony import */ var _sounds_mine_mp3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sounds/mine.mp3 */ \"./src/sounds/mine.mp3\");\n/* harmony import */ var _sounds_win_mp3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sounds/win.mp3 */ \"./src/sounds/win.mp3\");\n\n\n\n\n\nlet loaded = false;\n\nfunction loadMusic() {\n  if (loaded) {\n    return;\n  }\n  const buttonSound = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('audio', 'buttonSound');\n  buttonSound.src = _sounds_button_mp3__WEBPACK_IMPORTED_MODULE_1__;\n\n  const mineSound = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('audio', 'mineSound');\n  mineSound.src = _sounds_mine_mp3__WEBPACK_IMPORTED_MODULE_2__;\n\n  const winSound = (0,_createElement__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('audio', 'winSound');\n  winSound.src = _sounds_win_mp3__WEBPACK_IMPORTED_MODULE_3__;\n\n  document.body.append(buttonSound, mineSound, winSound);\n  loaded = true;\n}\n\nfunction playMusic(type = 'button') {\n  switch (type) {\n    case 'button': {\n      const buttonSound = document.querySelector('.buttonSound');\n      buttonSound.play();\n      break;\n    }\n    case 'win': {\n      const winSound = document.querySelector('.winSound');\n      winSound.play();\n      break;\n    }\n    case 'mine': {\n      const mineSound = document.querySelector('.mineSound');\n      mineSound.play();\n      break;\n    }\n    default:\n      break;\n  }\n}\n\nfunction stopMusic() {\n  const winSound = document.querySelector('.winSound');\n  console.log(winSound);\n  winSound.pause();\n}\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/playMusic.js?");

/***/ }),

/***/ "./src/modules/setMines.js":
/*!*********************************!*\
  !*** ./src/modules/setMines.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ setMines)\n/* harmony export */ });\n/* harmony import */ var _convertIndex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convertIndex */ \"./src/modules/convertIndex.js\");\n\r\n\r\nfunction setMines(nMines, target = { x: -1, y: -1 }) {\r\n  const minesIdx = [];\r\n  for (let i = 0; i < nMines; i += 1) {\r\n    let duplicate = false;\r\n    let random = Math.random() * (nMines ** 2);\r\n    random = Math.floor(random);\r\n    random = (0,_convertIndex__WEBPACK_IMPORTED_MODULE_0__.convertIndex)(random, nMines);\r\n    minesIdx.forEach((item) => {\r\n      if (item.x === random.x && item.y === random.y) {\r\n        duplicate = true;\r\n      }\r\n    });\r\n    if (duplicate || (target.x === random.x && target.y === random.y)) {\r\n      i -= 1;\r\n    } else {\r\n      minesIdx.push(random);\r\n    }\r\n  }\r\n  return minesIdx;\r\n}\r\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/setMines.js?");

/***/ }),

/***/ "./src/modules/timer.js":
/*!******************************!*\
  !*** ./src/modules/timer.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getSteps\": () => (/* binding */ getSteps),\n/* harmony export */   \"getTime\": () => (/* binding */ getTime),\n/* harmony export */   \"increaseSteps\": () => (/* binding */ increaseSteps),\n/* harmony export */   \"startTimer\": () => (/* binding */ startTimer),\n/* harmony export */   \"stopTimer\": () => (/* binding */ stopTimer)\n/* harmony export */ });\nlet sec;\r\nlet minute;\r\nlet steps;\r\n\r\nfunction startTimer() {\r\n  sec = 0;\r\n  minute = 0;\r\n  steps = 0;\r\n  const timerBlock = document.querySelector('.header__time');\r\n\r\n  function updateTime() {\r\n    sec += 1;\r\n    if (sec === 60) {\r\n      minute += 1;\r\n      sec = 0;\r\n      if (minute === 60) {\r\n        sec = 0;\r\n        minute = 0;\r\n      }\r\n    }\r\n\r\n    if (sec < 10) {\r\n      timerBlock.innerHTML = `${minute}:0${sec}`;\r\n    } else {\r\n      timerBlock.innerHTML = `${minute}:${sec}`;\r\n    }\r\n  }\r\n\r\n  return setInterval(updateTime, 1000);\r\n}\r\n\r\nfunction stopTimer(timer) {\r\n  clearInterval(timer);\r\n}\r\n\r\nfunction increaseSteps() {\r\n  steps += 1;\r\n}\r\n\r\nfunction getTime() {\r\n  return { minute, sec };\r\n}\r\n\r\nfunction getSteps() {\r\n  return steps;\r\n}\r\n\n\n//# sourceURL=webpack://mineswepper/./src/modules/timer.js?");

/***/ }),

/***/ "./src/sounds/button.mp3":
/*!*******************************!*\
  !*** ./src/sounds/button.mp3 ***!
  \*******************************/
/***/ ((module) => {

eval("module.exports = \"data:audio/mpeg;base64,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\";\n\n//# sourceURL=webpack://mineswepper/./src/sounds/button.mp3?");

/***/ }),

/***/ "./src/sounds/mine.mp3":
/*!*****************************!*\
  !*** ./src/sounds/mine.mp3 ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be7d8658c1bc061daae9.mp3\";\n\n//# sourceURL=webpack://mineswepper/./src/sounds/mine.mp3?");

/***/ }),

/***/ "./src/sounds/win.mp3":
/*!****************************!*\
  !*** ./src/sounds/win.mp3 ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"e8050315ba2c1c73a93f.mp3\";\n\n//# sourceURL=webpack://mineswepper/./src/sounds/win.mp3?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;