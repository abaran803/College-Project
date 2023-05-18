import React from 'react'
import TopBar from './TopBar'
import SideBar from './SideBar.js.old'
import UiPanel1 from './UiPanel1'
import UiPanel2 from './UiPanel2'
import UiPanel3 from './UiPanel3'
import CodePanel from './CodePanel'

import './DashBoard.css';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'

const DashBoard = () => {
  return (
    <div className='dashboard'>
        {/* TopBar */}
        <div className='bg-success dashboard__topbar'>
            <TopBar />
        </div>
        <div className='d-flex dashboard__panel'>
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
                </Switch>
            </div>
            {/* CodePanel */}
            <div className='col-md-4 bg-danger'>
                <CodePanel />
            </div>
        </div>
    </div>
  )
}

export default DashBoard