import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import IconButton from '../template/iconButton'
import { markAsDone, markAsPending, remove } from './taskActions'


const TaskList = props => {
    
    const renderRows = () => {
       
       const list = props.list || []
        return list.map(task =>
                <tr key={task._id}>
                    <td className={task.done ? 'markAsDone' : ''}>{task.description}</td>
                    <td>
                        <IconButton style='success' icon='check' hide={task.done}
                            onClick={ () => props.markAsDone(task)}
                        />
                        <IconButton style='warning' icon='undo' hide={!task.done}
                            onClick={ () => props.markAsPending(task)}
                        />
                        <IconButton style='danger' icon='trash-o'
                            onClick={ () => props.remove(task)}
                        />
                    </td>
                </tr>
                 
            )
    }
    
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Description</th>
                    <th className='tableActions'>Actions</th>
                </tr>
            </thead>
            <tbody>
                {renderRows()}
            </tbody>
        </table>
    )
}

const mapStateToProps = state => ({ list: state.task.list})

const mapDispachToProps = dispach => bindActionCreators({ markAsDone, markAsPending, remove }, dispach)

export default connect(mapStateToProps, mapDispachToProps)(TaskList)