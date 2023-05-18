import React from 'react'
import './Item.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const Item = ({content, path}) => {
  return (
      <NavLink to={'/algo'+path} activeClassName="sidebar__active">
        <div className='item'>
            {content}
        </div>
      </NavLink>
  )
}

export default Item