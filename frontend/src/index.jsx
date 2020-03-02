import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import APP from './main/app'
import reducers from './main/reducers'

const store = createStore(reducers)

ReactDOM.render(
    <Provider store={store}>
        <APP />
    </Provider>
    ,document.getElementById('app')
)