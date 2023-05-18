import React, { useEffect, useState } from 'react'
import Board from './Board'
import ratImageLogo from '../assets/rat.png';
import poster from '../assets/posters/sudoku.png';

import './UiPanel.css';
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UiPanel3 = () => {

  const {name} = useParams();

  const [started, setStarted] = useState();
  const [showBoard, setShowBoard] = useState();
  const [editable, setEditable] = useState();
  const [sudokuSpeed, setSudokuSpeed] = useState(100);

  // -------------------------- All the common variables ----------------------------------- //
let allTimeOuts = [];
let startingDelay = 0;
// let slider = document.querySelector('.slider');
let defaultBoard = [
    [3, 0, 6, 5, 0, 8, 4, 0, 0],
    [5, 2, 0, 0, 0, 0, 0, 0, 0],
    [0, 8, 7, 0, 0, 0, 0, 3, 1],
    [0, 0, 3, 0, 1, 0, 0, 8, 0],
    [9, 0, 0, 8, 6, 3, 0, 0, 5],
    [0, 5, 0, 0, 9, 0, 6, 0, 0],
    [1, 3, 0, 0, 0, 0, 2, 5, 0],
    [0, 0, 0, 0, 0, 0, 0, 7, 4],
    [0, 0, 5, 2, 0, 6, 3, 0, 0]
];
let N = defaultBoard.length;

const [board, setBoard] = useState(defaultBoard);
    
  let startTimer = 0;
  let ratSpeed = 200;

  let ratImage = document.createElement('img');
  ratImage.src = ratImageLogo;

  async function sleep(timer) {
    const promise = new Promise((resolve, reject) => setTimeout(() => {
      resolve();
    }, timer))
    return promise;
  }

  function makeBoard(i, j, val) {
    startingDelay += sudokuSpeed;
    let t = setTimeout(() => {
        if (val != 0) {
            document.querySelector("#colR" + i + j).style.background = "lightgreen";
            document.querySelector("#colR" + i + j).textContent = val;
        } else {
            document.querySelector("#colR" + i + j).style.background = "red";
            setTimeout(() => {
                document.querySelector("#colR" + i + j).style.background = (i + j) % 2 ? 'lightgrey' : 'white';
                document.querySelector("#colR" + i + j).textContent = '';
            }, 10);
        }
    }, startingDelay)
    allTimeOuts.push(t);
    board[i][j] = val;
}

function print() {
    let size = 9;
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            if (board[i][j]) {
                let selectedCell = document.querySelector("#colR" + i + j);
                selectedCell.textContent = board[i][j];
                selectedCell.style.background = "grey";
                selectedCell.style.color = "white";
            }
        }
    }
}



// -------------------------- Sudoku Logic Functions ----------------------------------- //
function isSafeS(row, col, num) {

    for (let d = 0; d < board.length; d++) {
        if (board[row][d] == num) {
            return false;
        }
    }

    for (let r = 0; r < board.length; r++) {
        if (board[r][col] == num) {
            return false;
        }
    }

    let sqrt = Math.floor(Math.sqrt(board.length));
    let boxRowStart = row - row % sqrt;
    let boxColStart = col - col % sqrt;

    for (let r = boxRowStart;
        r < boxRowStart + sqrt; r++) {
        for (let d = boxColStart;
            d < boxColStart + sqrt; d++) {
            if (board[r][d] == num) {
                return false;
            }
        }
    }

    return true;
}

function solveSudoku() {
    let row = -1;
    let col = -1;
    let isEmpty = true;
    for (let i = 0; i < N; i++) {
        for (let j = 0; j < N; j++) {
          console.log(board);
            if (board[i][j] == 0) {
                row = i;
                col = j;

                isEmpty = false;
                break;
            }
        }
        if (!isEmpty) {
            break;
        }
    }

    if (isEmpty) {
        return true;
    }

    for (let num = 1; num <= N; num++) {
        if (isSafeS(row, col, num)) {
            makeBoard(row, col, num);
            if (solveSudoku()) {

                return true;
            }
            else {

                makeBoard(row, col, 0);
            }
        }
    }
    return false;
}

  const fillBoardHandler = () => {
    for(let i=0; i<N; i++) {
      const tmp = [];
      for(let j=0; j<N; j++) {
        tmp.push(board[i][j]);
        // document.querySelector("#colR" + i + j).textContent = 1;
        console.log('#colR' + i + j);
      }
      board.push(tmp);
    }
    // setShowBoard(true);
    // document.querySelector('#colR' + 0 + 0).append(ratImage);
  }

  const startAlgoHandler = () => {
    setStarted(true);
    solveSudoku(board);
    console.log(board);
  }

  const clearAll = () => {
    setBoard([]);
    setStarted(false);
    setShowBoard(false);
  }

  fillBoardHandler();

  return (
    <div className='ui-panel'>
        <div className='ui-panel__header'>Header</div>
        { showBoard ? (
          <div className='ui-panel__board text-center'>
            <Board algo={name} showBoard={true} rowCnt={N} colCnt={N} sudokuData={board} />
          </div>
        ) : <div>
              <img className='img-fluid' src={poster} />
            </div>
        }
        { showBoard && 
          <div className='d-flex justify-content-center'>
            <button onClick={clearAll}>Back</button>
            <button className='mx-2' onClick={() => setEditable(item => !item)}>
              {editable ? 'Stop' : 'Start'} Editing
            </button>
            <button onClick={startAlgoHandler}>start</button>
          </div>
        }
        {!showBoard && <button onClick={() => setShowBoard(true)}>Show Board</button>}
    </div>
  )
}

export default UiPanel3