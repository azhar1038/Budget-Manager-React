import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import AppRouter from './routers/app_router'
import configureStore from './stores/configure-store'
import './styles/styles.scss'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))