import React, { useState } from 'react'
import Board from './Board'
import ratImageLogo from '../assets/rat.png';
import poster from '../assets/posters/sudoku.png';

import './UiPanel.css';

const UiPanel3 = () => {

  let grid = [ 
    [ 3, 0, 6, 5, 0, 8, 4, 0, 0 ],
    [ 5, 2, 0, 0, 0, 0, 0, 0, 0 ],
    [ 0, 8, 7, 0, 0, 0, 0, 3, 1 ],
    [ 0, 0, 3, 0, 1, 0, 0, 8, 0 ],
    [ 9, 0, 0, 8, 6, 3, 0, 0, 5 ],
    [ 0, 5, 0, 0, 9, 0, 6, 0, 0 ],
    [ 1, 3, 0, 0, 0, 0, 2, 5, 0 ],
    [ 0, 0, 0, 0, 0, 0, 0, 7, 4 ],
    [ 0, 0, 5, 2, 0, 6, 3, 0, 0 ] 
  ]

  const [board, setBoard] = useState([]);
  const [started, setStarted] = useState();
  const [showBoard, setShowBoard] = useState();
  const [editable, setEditable] = useState();
  const [sudokuSpeed, setSudokuSpeed] = useState(100);

  async function sleep(timer) {
    const promise = new Promise((resolve, reject) => setTimeout(() => {
      resolve();
    }, timer))
    return promise;
  }

  // Javascript program for above approach
 
// N is the size of the 2D matrix   N*N
let N = 9;
 
/* Takes a partially filled-in grid and attempts
    to assign values to all unassigned locations in
    such a way to meet the requirements for
    Sudoku solution (non-duplication across rows,
    columns, and boxes) */
async function solveSudoku(row, col)
{
     
    /* If we have reached the 8th
       row and 9th column (0
       indexed matrix) ,
       we are returning true to avoid further
       backtracking       */
    if (row == N - 1 && col == N)
        return true;
 
    // Check if column value  becomes 9 ,
    // we move to next row
    // and column start from 0
    if (col == N)
    {
        row++;
        col = 0;
    }
 
    // Check if the current position
    // of the grid already
    // contains value >0, we iterate
    // for next column
    if (board[row][col] != 0)
        return await solveSudoku(row, col + 1);
 
    for(let num = 1; num < 10; num++)
    {
         
        // Check if it is safe to place
        // the num (1-9)  in the given
        // row ,col ->we move to next column
        const defaultColor = document.querySelector('#colR' + row + col).style.background;
        if (await isSafe(row, col, num))
        {
             
            /*  assigning the num in the current
            (row,col)  position of the grid and
            assuming our assigned num in the position
            is correct */
            board[row][col] = num;
            console.log('#colR' + row + col);
            await sleep(10);
            document.querySelector('#colR' + row + col).style.background = 'lightgreen';
            document.querySelector('#colR' + row + col).value = board[row][col];
 
            // Checking for next
            // possibility with next column
            if (await solveSudoku(row, col + 1)) {
                return true;
            }
        }
         
        /* removing the assigned num , since our
           assumption was wrong , and we go for next
           assumption with diff num value   */
        board[row][col] = 0;
        document.querySelector('#colR' + row + col).style.background = defaultColor;
        console.log('#colR' + row + col);
        await sleep(10);
        document.querySelector('#colR' + row + col).value = board[row][col];
    }
    return false;
}
 
/* A utility function to print grid */
function print()
{
    for(let i = 0; i < N; i++)
    {
        for(let j = 0; j < N; j++)
            document.write(board[i][j] + " ");
             
        document.write("<br>");
    }
}
 
// Check whether it will be legal
// to assign num to the
// given row, col
async function isSafe(row, col, num)
{
     
    // Check if we find the same num
    // in the similar row , we
    // return false
    for(let x = 0; x <= 8; x++)
        if (board[row][x] == num)
            return false;
 
    // Check if we find the same num
    // in the similar column ,
    // we return false
    for(let x = 0; x <= 8; x++)
        if (board[x][col] == num)
            return false;
 
    // Check if we find the same num
    // in the particular 3*3
    // matrix, we return false
    let startRow = row - row % 3,
        startCol = col - col % 3;
         
    for(let i = 0; i < 3; i++)
        for(let j = 0; j < 3; j++)
            if (board[i + startRow][j + startCol] == num)
                return false;
 
    return true;
}
 
// Driver Code
  
// if (solveSudoku(grid, 0, 0))
//     print(grid)
// else
//     document.write("no solution  exists ")
 
// This code is contributed by rag2127

const fillBoardHandler = (board) => {
  setBoard(grid);
  setShowBoard(true);
  for(let x = 0; x <= 8; x++)
    for(let y = 0; y <= 8; y++)
      document.querySelector('#colR' + x + y).value = grid[x][y];
}








const startAlgoHandler = () => {
  for(let x = 0; x <= 8; x++)
    for(let y = 0; y <= 8; y++)
      board[x][y] = document.querySelector('#colR' + x + y).value;
  setStarted(true);
  solveSudoku(0, 0);
}

const clearAll = () => {
  setBoard([]);
  setStarted(false);
  setShowBoard(false);
}

function print() {
let size = 9;
for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
        if (board[i][j]) {
            let selectedCell = document.querySelector("#colR" + i + j);
            selectedCell.value = board[i][j];
            selectedCell.style.background = "grey";
            selectedCell.style.color = "white";
        }
    }
}
}










  return (
    <div className='ui-panel'>








        <div className='ui-panel__header'>Header</div>
          <div className='ui-panel__board text-center' style={showBoard ? {} : {display: 'none'}}>
            <Board algo={'alog3'} showBoard={true} rowCnt={9} colCnt={9} isSudoku={true} editable={editable} />
          </div>
          <div style={showBoard ? {display: 'none'} : {}}>
            <img className='img-fluid' src={poster} placeholder='poster' />
          </div>
        { showBoard && 
          <div className='d-flex justify-content-center'>
            <button onClick={clearAll}>Back</button>
            {!started && <button className='mx-2' onClick={() => setEditable(item => !item)}>
              {editable ? 'Stop' : 'Start'} Editing
            </button>}
            {!editable && <button onClick={startAlgoHandler}>start</button>}
          </div>
        }
        {!showBoard && <button onClick={fillBoardHandler}>Show Board</button>}



    </div>
  )
}

export default UiPanel3