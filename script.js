const gameBoard = (() => {
  let _board = new Array(9);
  const gameboard = document.getElementById('gameboard');
  const showBoard = () => {
    gameboard.classList.remove('hidden');
  };
  const hideBoard = () => {
      gameboard.classList.add('hidden')
  };
  return { showBoard, hideBoard };
})();

const gameController = (() => {
    let currentSign;

    const getSign = (btn) => {
        currentSign = btn.target.innerText;
        console.log(currentSign)
    }

    return {currentSign, getSign}
})();

const o_btn = document.getElementById('o-button');
const x_btn = document.getElementById('x-button');
const r_btn = document.getElementById('r-button');

const cell_1 = document.getElementById('cell-1')
const cell_2 = document.getElementById('cell-2')
const cell_3 = document.getElementById('cell-3')
const cell_4 = document.getElementById('cell-4')
const cell_5 = document.getElementById('cell-5')
const cell_6 = document.getElementById('cell-6')
const cell_7 = document.getElementById('cell-7')
const cell_8 = document.getElementById('cell-8')
const cell_9 = document.getElementById('cell-9')

cell_1.addEventListener('click', function(e){console.log(e)})

o_btn.addEventListener('click', gameBoard.showBoard);
o_btn.addEventListener('click', gameController.getSign);


x_btn.addEventListener('click', gameBoard.showBoard);
x_btn.addEventListener('click', gameController.getSign);

r_btn.addEventListener('click', gameBoard.hideBoard);



const playerFactory = (player) => {};
