import React, { useState } from 'react'
import Board from './Board'
import ratImageLogo from '../assets/rat.png';
import poster from '../assets/posters/nQueen.png';

import './UiPanel.css';

const UiPanel2 = () => {

  const [started, setStarted] = useState();
  const [boardSize, setBoardSize] = useState();
  const [showBoard, setShowBoard] = useState();
  const [queenBoard, setQueenBoard] = useState([]);

    


let currentTime = 1000;
var speed;
let queenImage = document.createElement('img');
let queenWrapper = document.createElement('div');
queenImage.src = ratImageLogo;
queenImage.className = 'logo';
queenWrapper.innerHTML = queenImage;

async function sleep(timer) {
  const promise = new Promise((resolve, reject) => setTimeout(() => {
    resolve();
  }, timer))
  return promise;
}

let notPossible = async (row, col) => {
    currentTime += speed;
    await sleep(speed);
        // document.querySelector('.status').innerHTML = `Checking Row ${row} and Column ${col}`;
        document.getElementById(`colR${row}${col}`).appendChild(queenImage);
        // document.getElementById(`colR${row}${col}`).innerHTML = '1';
    await sleep(speed);
        document.getElementById(`colR${row}${col}`).innerHTML = '';
}

async function isSafeQ(row, col) {
    await notPossible(row, col);
    for (let i = 0; i < col; i++) {
        if (queenBoard[row][i] === 1) {
            console.log("H1");
            return false
        }
    }
    for (let i = row, j = col; i >= 0 && j >= 0; i--, j--)
        if (queenBoard[i][j]) {
            console.log("H2");
            return false
        }
    for (let i = row, j = col; j >= 0 && i < boardSize; i++, j--)
        if (queenBoard[i][j]) {
            console.log("H3");
            return false
        }

    return true
}

async function solveNQUtil(col) {
    console.log(col, boardSize);
    if (col >= boardSize)
        return true
    for (let i = 0; i < boardSize; i++) {
        let safeStatus = await isSafeQ(i, col)
        console.log(safeStatus);
        if (safeStatus === true) {
          await sleep(speed);
                document.getElementById(`colR${i}${col}`).innerHTML = '1';
            queenBoard[i][col] = 1
            if (await solveNQUtil(col + 1) === true) {
                return true
            }
            await sleep(speed);
                document.getElementById(`colR${i}${col}`).innerHTML = '';
            queenBoard[i][col] = 0
        } else {
          await sleep(speed);
                // document.querySelector('.status').innerHTML = `Not valid for Row ${i} and Column ${col}`;
        }
    }
    return false
}
async function solveNQ() {
    if (await solveNQUtil(0) === false) {
        alert("Solution does not exist")
        document.querySelector('table').innerHTML = "";
        return false
    }
    return true
}

  const showBoardHandler = () => {
    for(let i=0; i<boardSize; i++) {
      const tmp = [];
      for(let j=0; j<boardSize; j++) {
        tmp.push(0);
      }
      queenBoard.push(tmp);
    }
    setShowBoard(true);
    // document.querySelector('#colR' + 0 + 0).append(ratImage);
  }

  const startAlgoHandler = () => {
    setStarted(true);
    speed = 100;
    currentTime = 1000;
    solveNQ();
    console.log(queenBoard);
  }

  const clearAll = () => {
    setQueenBoard([]);
    setStarted(false);
    setShowBoard(false);
  }

  return (
    <div className='ui-panel'>
        <div className='ui-panel__header'>Header</div>
        <div className='ui-panel__board text-center'>
            { (showBoard && boardSize && boardSize) ? <Board showBoard={showBoard} boardSize={boardSize} rowCnt={boardSize} colCnt={boardSize} /> : <img className='img-fluid' src={poster} alt='poster' />}
        </div>
        { !showBoard && (
          <div className='ui-panel__action'>
            <input type="number" onChange={(e) => setBoardSize(e.target.value)} placeholder='Enter Board Size'/>
            <button onClick={showBoardHandler} className='bg bg-success px-2 py-1 rounded'>
              Create Board
            </button>
          </div>
        ) }
        {showBoard && 
          <div className='d-flex justify-content-center'>
            <button onClick={clearAll}>Back</button>
            <button onClick={startAlgoHandler}>start</button>
          </div>
        }
    </div>
  )
}

export default UiPanel2