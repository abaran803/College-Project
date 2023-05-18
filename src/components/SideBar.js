import React from 'react'
import Group from './Group'

import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar h-100 row flex-column">
      <div className="sidebar__top col-md-1">Top</div>
      <div className="sidebar__menus col-md-10">
        <Group items={[
          {name: 'Rat in the Maze', path: '/algo1'}, 
          {name: 'N-Queen', path: '/algo2'}, 
          {name: 'Sudoku Solver', path: '/algo3'}
        ]} />
      </div>
      <div className="sidebar__bottom col-md-1">Bottom</div>
    </div>
  )
}

export default SideBar