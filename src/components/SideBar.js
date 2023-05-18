import React from 'react'
import Group from './Group'

import './SideBar.css';

const SideBar = () => {
  return (
    <div className="sidebar h-100 row flex-column">
      <div className="sidebar__top col-md-1">Top</div>
      <div className="sidebar__menus col-md-10">
        <Group items={[
          {name: 'i1', path: '/algo1'}, 
          {name: 'i2', path: '/algo2'}, 
          {name: 'i3', path: '/algo3'}
        ]} />
      </div>
      <div className="sidebar__bottom col-md-1">Bottom</div>
    </div>
  )
}

export default SideBar