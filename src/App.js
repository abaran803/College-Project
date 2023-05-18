import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import TopBar from './components/TopBar'
import SideBar from './components/SideBar.js'
import UiPanel1 from './components/UiPanel1'
import UiPanel2 from './components/UiPanel2'
import UiPanel3 from './components/UiPanel3'
import CodePanel from './components/CodePanel'
import DashBoard from './components/DashBoard';
import Home from './pages/Home';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import About from './pages/About';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>

        <div className='app'>
          {/* TopBar */}
          <div className='bg-success app__topbar pb-1'>
              <TopBar />
          </div>
          <Route path='/algo'>
          <div className='d-flex app__panel'>
              {/* SideBar */}
              <div className='col-md-2 bg-secondary'>
                  <SideBar />
              </div>
              {/* UiPanel */}
              <div className='col-md-6 bg-primary'>
                  <Switch>
                      <Route path='/algo/algo1'>
                          <UiPanel1 />
                      </Route>
                      <Route path='/algo/algo2'>
                          <UiPanel2 />
                      </Route>
                      <Route path='/algo/algo3'>
                          <UiPanel3 />
                      </Route>
                      {/* <Route path='/dashboard'>
                          <DashBoard />
                      </Route> */}
                  </Switch>
              </div>
              {/* CodePanel */}
              <Switch>
                <Route path="/algo/:name">
                <div className='col-md-4 bg-danger'>
                    <CodePanel />
                </div>
                </Route>
              </Switch>
          </div>
          </Route>
          <Route path='/' exact><Home /></Route>
          <Route path='/home'><Redirect to='/' /></Route>
          <Route path='/quiz'><Quiz /></Route>
          <Route path='/leaderboard'><Leaderboard /></Route>
          <Route path='/about'><About /></Route>
        </div>
        </Switch>
      </Router>
    );
  }
}

export default App;
