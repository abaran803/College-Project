import React, { useEffect, useState } from 'react'
import Board from './Board'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UiPanel = () => {

    const [started, setStarted] = useState();
    
    // useEffect(() => {
    //     setStarted(true);
    // }, [])

  return (
    <div className='ui-panel'>
        <div className='ui-panel__header'></div>
        <div className='ui-panel__board text-center'>
            <Board started={started} />
            <button onClick={() => setStarted(!started)} className='bg bg-success px-2 py-1 rounded'>
              {started ? 'Stop' : 'Start'}
            </button>
        </div>
        <div className='ui-panel__action'></div>
    </div>
  )
}

export default UiPanel