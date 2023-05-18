import React from 'react'
import Group from './Group'

import './SideBar.css';

const SideBar = () => {
  return (
    <div id="sidebar">
        <ul type="none">
            <li class="brand"><i class="fa-brands fa-bandcamp"></i>Visualizer</li>
            <li class="search"><input class="searchbar" type="text" placeholder="&#xf002;  Search..." /></li>
            <li class="menu-item"><a href="#home"><i class="fa-brands fa-r-project"></i>Dashboard</a></li>
            <li class="menu-item"><a href="#project1"><i class="fa-brands fa-r-project"></i>N-Queen</a></li>
            <li class="menu-item"><a href="#project2"><i class="fa-brands fa-r-project"></i>Sudoku Solver</a></li>
            <li class="menu-item"><a href="#project3"><i class="fa-brands fa-r-project"></i>Rat in the Maze</a></li>
            <li class="menu-item"><a href="#project4"><i class="fa-brands fa-r-project"></i>Project4</a></li>
            <li class="sidebar-bottom">
                <div class="profile-icon"></div>
                <div class="txt">
                    <div class="dev-name">Ayush Baranwal</div>
                    <div class="dev-designation">Web Developer</div>
                </div>
            </li>
        </ul>
    </div>
  )
}

export default SideBar