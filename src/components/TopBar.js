import React from 'react'
import './TopBar.css';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark h-100">
      <a className="navbar-brand" href="/">AlgoVisualizer</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <NavLink className='nav-link' to='/home' activeClassName="topbar__active active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink className='nav-link' to='/algo/algo1' activeClassName="topbar__active active">
              Algorithms
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/quiz' activeClassName="topbar__active active">
              Quiz
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/leaderboard' activeClassName="topbar__active active">
              Leaderboard
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className='nav-link' to='/about' activeClassName="topbar__active active">
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopBar