const oBtn = document.getElementById('o-button');
const xBtn = document.getElementById('x-button');
const rBtn = document.getElementById('r-button');

const board = (() => {
  /* -------------------------------- variables ------------------------------- */

  let currentMark;
  let boardMarks = ['', '', '', '', '', '', '', '', ''];
  const gameboard = document.querySelector('#gameboard');

  /* --------------------------------- methods -------------------------------- */

  const addEvents = () => {
    oBtn.addEventListener('click', board.getMark);
    xBtn.addEventListener('click', board.getMark);
    rBtn.addEventListener('click', board.resetBoard);
  };
  const renderBoard = () => {
    let idCounter = 0;
    boardMarks.forEach((element) => {
      const cell = document.createElement('div');
      gameboard.appendChild(cell);
      cell.classList.add('cell');
      cell.id = idCounter;
      idCounter += 1;
      cell.addEventListener('click', board.addMark);
      //   cell.addEventListener('click', function (e) {
      //     console.log(e);
      if (element !== undefined) {
        cell.innerText = element;
      } else {
        cell.innerText = '';
      }
    });
  };

  const resetBoard = () => {
    currentMark = '';
    boardMarks = ['', '', '', '', '', '', '', '', ''];
    gameboard.innerHTML = '';
    renderBoard();
  };
  const getMark = (btn) => {
    currentMark = btn.target.innerText;
    // console.log(currentMark);
  };
  const addMark = (cell) => {
    const DOMCell = cell;
    if (!currentMark) {
      //   alert('Pick a mark!');
    } else if (DOMCell.target.innerText === '') {
      DOMCell.target.innerText = currentMark;
      const i = DOMCell.target.id;
      boardMarks[i] = currentMark;
      //   console.log(boardMarks);
    }
  };
  const showBoard = () => {
    gameboard.classList.remove('hidden');
  };
  const hideBoard = () => {
    gameboard.classList.add('hidden');
  };

  return {
    resetBoard,
    addEvents,
    renderBoard,
    showBoard,
    hideBoard,
    addMark,
    getMark,
  };
})();

board.renderBoard();
board.addEvents();
