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
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleSearch = this.handleSearch.bind(this)

        this.refresh()
    }
    

    handleAdd(){

        const description = this.state.description

        axios.post(urlApi, {description})
            .then(res => this.refresh() 
            )
        
    }

    handleChange(e){
        this.setState({ ...this.state, description: e.target.value })
    }


    refresh(description = ''){
        const search = description ? `&description__regex=/${description}/` : ''
        axios.get(`${urlApi}?sort=-create_date${search}`)
            .then(resp =>
                this.setState({ ...this.state, description, list: resp.data})
            )
    }

    handleRemove(task){
        axios.delete(`${urlApi}/${task._id}`)
            .then(
                    resp => this.refresh(this.state.description)
                )
    }

    handleMarkAsDone(task){
        axios.put(`${urlApi}/${task._id}`, { ... task, done: true})
            .then(
                resp => this.refresh(this.state.description)
            )
    }

    handleMarkAsPending(task){
        axios.put(`${urlApi}/${task._id}`, { ... task, done: false})
            .then(
                resp => this.refresh(this.state.description)
            )
    }

    handleSearch(){
        this.refresh(this.state.description)
    }


    render(){
        return (
            <div>
                <PageHeader name='Tasks' small='Create' />
                <TaskForm 
                    description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    />
                <TaskList 
                    list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending}
                    />
            </div>
        )
    }
}