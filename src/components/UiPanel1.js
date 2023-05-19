import React, {useState } from 'react'
import Board from './Board'
import ratImageLogo from '../assets/rat.png';
import poster from '../assets/posters/rithm.png';

import './UiPanel.css';

const UiPanel1 = () => {

  const [started, setStarted] = useState();
  const [rowCnt, setRowCnt] = useState();
  const [colCnt, setColCnt] = useState();
  const [showBoard, setShowBoard] = useState();
  const [editable, setEditable] = useState();
    
  let ratSpeed = 200;

  let ratImage = document.createElement('img');
  ratImage.src = ratImageLogo;
  ratImage.className = 'logo';

  const [maze, setMaze] = useState([]);

  const toggleBlock = (i, j) => {
    if (editable) {
      document.querySelector('#colR' + i + j).style.background = document.querySelector('#colR' + i + j).style.background === "black" ? ((i + j) % 2 === 0 ? "grey" : "white") : "black";
        maze[i][j] = maze[i][j] ? 0 : 1;
    }
  }

  function isSafeR(x, y) {
      return (x >= 0 && x < rowCnt && y >= 0
          && y < colCnt && maze[x][y] === 1);
  }

  async function sleep(timer) {
    const promise = new Promise((resolve, reject) => setTimeout(() => {
      resolve();
    }, timer))
    return promise;
  }

  async function solveMaze() {
      let sol = new Array(rowCnt);
      for (let i = 0; i < rowCnt; i++) {
          sol[i] = new Array(rowCnt);
          for (let j = 0; j < colCnt; j++) {
              sol[i][j] = 0;
          }
      }

      if (await solveMazeUtil(0, 0, sol) === false) {
          // document.write("Solution doesn't exist");
          return false;
      }

      return true;
  }
  async function solveMazeUtil(x, y, sol) {
      if (x === rowCnt - 1 && y === colCnt - 1 && maze[x][y] === 1) {
        await sleep(ratSpeed);
        document.querySelector('#colR' + x + y).style.background = "green";
        document.querySelector('#colR' + x + y).innerHTML = '';
        document.querySelector('#colR' + x + y).append(ratImage);
        sol[x][y] = 1;
        return true;
      }
      if (isSafeR(x, y) === true) {
          if (sol[x][y] === 1)
              return false;

          await sleep(ratSpeed);
              if(!(x === 0 && y === 0)) {
                document.querySelector('#colR' + x + y).style.background = "lightgreen";
              }
              document.querySelector('#colR' + x + y).append(ratImage);

          sol[x][y] = 1;

          if (await solveMazeUtil(x + 1, y, sol))
              return true;

          if (await solveMazeUtil(x, y + 1, sol))
              return true;

          if (await solveMazeUtil(x - 1, y, sol))
              return true;

          if (await solveMazeUtil(x, y - 1, sol))
              return true;

          await sleep(ratSpeed);
          document.querySelector('#colR' + x + y).style.background = 'red';
          await sleep(ratSpeed);
          document.querySelector('#colR' + x + y).style.background = ((x + y) % 2 === 0) ? "grey" : "white";
          sol[x][y] = 0;
          return false;
      }

      return false;
  }

  const showBoardHandler = () => {
    for(let i=0; i<rowCnt; i++) {
      const tmp = [];
      for(let j=0; j<colCnt; j++) {
        tmp.push(1);
      }
      maze.push(tmp);
    }
    setShowBoard(true);
    // document.querySelector('#colR' + 0 + 0).append(ratImage);
  }

  const startAlgoHandler = () => {
    setStarted(true);
    solveMaze(maze);
  }

  const clearAll = () => {
    setMaze([]);
    setStarted(false);
    setShowBoard(false);
  }

  return (
    <div className='ui-panel'>
        <div className='ui-panel__header'>Header</div>
        <div className='ui-panel__board text-center'>
            { (showBoard && rowCnt && colCnt) ? <Board toggleBlock={toggleBlock} showBoard={showBoard} rowCnt={rowCnt} colCnt={colCnt} /> : <img className='img-fluid' src={poster} alt="poster" />}
        </div>
        { !showBoard && (
          <div className='ui-panel__action'>
            <input type="number" onChange={(e) => setRowCnt(e.target.value)} placeholder='Enter Row Count'/>
            <input type="number" onChange={(e) => setColCnt((e.target.value))} placeholder='Enter Col Count'/>
            <button onClick={showBoardHandler} className='bg bg-success px-2 py-1 rounded'>
              Create Board
            </button>
          </div>
        ) }
        {showBoard && 
          <div className='d-flex justify-content-center'>
            <button onClick={clearAll}>Back</button>
            {!started && <button className='mx-2' onClick={() => setEditable(item => !item)}>
              {editable ? 'Stop' : 'Start'} Editing
            </button>}
            {!started && <button onClick={startAlgoHandler}>start</button>}
          </div>
        }
    </div>
  )
}

export default UiPanel1