import React from 'react'
import Grid from '../template/grid'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeDescription } from './taskActions'
import IconButton from '../template/iconButton'

const TaskForm = props => {


    const keyHandler = (e) => {
        if(e.key ===  'Enter'){
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        }else if (e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (

        <div role='form' className='taskForm'>

            <Grid cols='12 9 10'>
                <input id='description' className='form-control' 
                    placeholder='Add Task' 
                    onChange={props.changeDescription}
                    onKeyUp={keyHandler}
                    value={props.description}/> 
            </Grid>
            <Grid cols='12 3 2'>
                <IconButton style='primary' icon='plus' onClick={props.handleAdd} />
                <IconButton style='info' icon='search' onClick={props.handleSearch}/>
                <IconButton style='default' icon='close' onClick={props.handleClear}/>
            </Grid>       
        </div>

    )
}

const mapStateToProps = state => ({description: state.task.description})

const mapDispachToProps = 
    dispach => 
        bindActionCreators(
            { changeDescription }
        , dispach)

export default connect(mapStateToProps, mapDispachToProps)(TaskForm)