// A placeholder to show poster of Algo before start
// When start, replace poster with actuals board

import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import { getPoster } from '../services/api';

const Board = ({showBoard, rowCnt, colCnt, toggleBlock, sudokuData, algo}) => {

  const {name} = useParams();

  const rowArr = [];
  const colArr = [];
  
  while(rowCnt--) rowArr.push(0);
  while(colCnt--) colArr.push(0);

  return (
    <div className='p-5 d-flex justify-content-center'>
        {showBoard ? <table>{
          rowArr.map((i, ind) => <tr key={ind}>{
            colArr.map((i, ind1) => <td key={ind1} className='px-3 py-2 position-relative' id={'colR'+ind+ind1} onClick={toggleBlock ? () => toggleBlock(ind, ind1) : ''} style={{background: (ind+ind1)%2 ? 'white' : 'grey'}}>{sudokuData ? sudokuData[ind][ind1] : <div>&nbsp;</div>}</td>)
          }</tr>)
        }
        </table> : <img src={getPoster(algo)} />}
    </div>
  )
}

export default Board