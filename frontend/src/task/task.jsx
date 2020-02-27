import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TaskForm from './taskForm'
import TaskList from './taskList'

const urlApi = 'http://localhost:3003/api/tasks'

export default class Task extends Component {


    constructor(props){
        super(props)
        this.state = {description: '', list: []}
        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    

    handleAdd(){

        const description = this.state.description
        
        axios.post(urlApi, {description})
            .then(resp =>
                console.log('Is it ok!')    
            )
        
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value })
    }

    render(){
        return (
            <div>
                <PageHeader name='Tasks' small='Create' />
                <TaskForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}/>
                <TaskList />
            </div>
        )
    }
}