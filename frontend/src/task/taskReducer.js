const INITIAL_STATE = { description: '',list: [] }

export default (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'DESCRIPITION_CHANGED':
            return { ...state, description: action.payload }
        case 'TASK_SEARCHED':
            return { ...state, list: action.payload } 
        case 'TASK_ADDED':
            return { ...state, description: ''}
        case 'TASK_ADDED':
            return { ...state, description: ''}
        case 'TASK_CLEAR':
            return { ...state, description: ''}
        default:
            return state
    }
}