import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (

    <div role='form' className='taskForm'>

        <Grid cols='12 9 10'>
            <input id='description' className='form-control' 
                placeholder='Add Task' 
                onChange={props.handleChange}
                value={props.description}/> 
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus' onClick={props.handleAdd}></IconButton>
        </Grid>       
    </div>

)