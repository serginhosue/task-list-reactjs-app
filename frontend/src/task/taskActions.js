import axios from 'axios'
import taskForm from './taskForm'

const URL_API = 'http://localhost:3003/api/tasks'

export const changeDescription = (event) => ({
    type: 'DESCRIPITION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL_API}?sort=-create_date`)
    return{
        type: 'TASK_SEARCHED',
        payload: request
    }
}


export const add = (description) => {
    return dispach => {
        axios.post(URL_API, { description })
        .then(resp => dispach({ type: 'TASK_ADDED', payload: resp.data}))
        .then(resp => dispach(search()))
    }
}