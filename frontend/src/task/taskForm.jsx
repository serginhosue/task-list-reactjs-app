import React, { Component } from 'react'
import Grid from '../template/grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { add, clear, changeDescription, search } from './taskActions'
import IconButton from '../template/iconButton'

class TaskForm extends Component {
    constructor(props){
        super(props)
        this.keyHandler = this.keyHandler.bind(this)
    }

    componentWillMount(){
        this.props.search()
    }

    keyHandler(e){

        const { add, clear, search, description } = this.props

        if(e.key ===  'Enter'){
            e.shiftKey ? search() : add(description)
        }else if (e.key === 'Escape'){
            clear()
        }
    }

    render(){
        
        const { add, clear, search, description } = this.props

        return(
            <div role='form' className='taskForm'>
                <Grid cols='12 9 10'>
                    <input id='description' className='form-control' 
                        placeholder='Add Task' 
                        onChange={this.props.changeDescription}
                        onKeyUp={this.keyHandler}
                        value={this.props.description}/> 
                </Grid>
                <Grid cols='12 3 2'>
                    <IconButton style='primary' icon='plus' onClick={() => add(description)} />
                    <IconButton style='info' icon='search' onClick={() => search()}/>
                    <IconButton style='default' icon='close' onClick={() => clear()}/>
                </Grid>       
            </div>
        )
    }

}

const mapStateToProps = state => ({description: state.task.description})

const mapDispachToProps = 
    dispach => 
        bindActionCreators(
            { add, clear, changeDescription, search }
        , dispach)

export default connect(mapStateToProps, mapDispachToProps)(TaskForm)