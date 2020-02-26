import React from 'react'
//change hashHistory to BrowseHistory
import {Router, Route, Redirect, hashHistory} from 'react-router'

import Task from '../task/task'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/tasks' component={Task} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/tasks' />
    </Router>
)
