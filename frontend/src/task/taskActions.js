import axios from 'axios'


const URL_API = 'http://localhost:3003/api/tasks'

export const changeDescription = (event) => ({
    type: 'DESCRIPITION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    
    return (dispach, getState) => {
        const description = getState().task.description
        const search = description ? `&description__regex=/${description}/` : ''
        console.log(`${URL_API}?sort=-create_date${search}`)
        axios.get(`${URL_API}?sort=-create_date${search}`)
            .then(resp => dispach({ type: 'TASK_SEARCHED', payload: resp.data })) 
    }
}


export const add = (description) => {
    return dispach => {
        axios.post(URL_API, { description })
        .then(resp => dispach({ type: 'TASK_ADDED', payload: resp.data}))
        .then(resp => dispach(search()))
    }
}

export const markAsDone = (task) => {
    return dispach => {
        axios.put(`${URL_API}/${task._id}`, { ...task, done: true})
                .then(resp => dispach(search()))
    }
}

export const markAsPending = (task) => {
    return dispach => {
        axios.put(`${URL_API}/${task._id}`, { ...task, done: false })
            .then(resp => dispach(search()))
    }
}

export const remove = (task) => {
    return dispach => {
        axios.delete(`${URL_API}/${task._id}`)
            .then(resp => dispach(search()))
    }
}

export const clear = () => {
    return [ { type: 'TASK_CLEAR' }, search() ]
}