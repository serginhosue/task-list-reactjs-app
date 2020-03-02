import React, { Component } from 'react'
import Grid from '../template/grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription, search } from './taskActions'
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
        if(e.key ===  'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    render(){
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
                    <IconButton style='primary' icon='plus' onClick={this.props.handleAdd} />
                    <IconButton style='info' icon='search' onClick={this.props.handleSearch}/>
                    <IconButton style='default' icon='close' onClick={this.props.handleClear}/>
                </Grid>       
            </div>
        )
    }

}

const mapStateToProps = state => ({description: state.task.description})

const mapDispachToProps = 
    dispach => 
        bindActionCreators(
            { changeDescription, search }
        , dispach)

export default connect(mapStateToProps, mapDispachToProps)(TaskForm)