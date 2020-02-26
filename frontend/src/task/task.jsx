import React, { Component } from 'react'
import PageHeader from '../template/pageHeader'
import TaskForm from './taskForm'
import TaskList from './taskList'

export default class Task extends Component {
    render(){
        return (
            <div>
                <PageHeader name='Tasks' small='Create' />
                <TaskForm />
                <TaskList />
            </div>
        )
    }
}