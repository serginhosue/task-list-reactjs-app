import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'

import React from 'react'
import Task from '../task/task'
import About from '../about/about'
import Menu from '../template/menu'

export default props => (
    <div className='container'>
        <Menu />
        <Task />
        <About />
    </div>
)