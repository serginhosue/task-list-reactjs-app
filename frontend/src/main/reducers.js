import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    task: () => ({
        description: 'TODO Taks',
        list: [{
            _id: 1,
            description: 'Task 01',
            done: true
        },{
            _id: 2,
            description: 'Task 02',
            done: false
        },{
            _id: 3,
            description: 'Task 04',
            done: false
        }]
    })
})

export default rootReducer