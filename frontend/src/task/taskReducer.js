const INITIAL_STATE = {
    description: 'Task ...',
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
        description: 'Task 03',
        done: false
    }]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPITION_CHANGED':
            return { ...state, description: action.payload }
        case 'TASK_SEARCHED':
            return { ...state, list: action.payload.data } 
        default:
            return state
    }
}