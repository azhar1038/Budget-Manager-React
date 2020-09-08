import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import AppRouter, {history} from './routers/app-router'
import configureStore from './stores/configure-store'
import {startSetExpenses} from './actions/expenses'
import {login, logout} from './actions/auth'
import {firebase} from './firebase/firebase'
import LoadingPage from './components/loading-page'
import './styles/styles.scss'

const store = configureStore()

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
)

let hasRendered = false
const renderApp=()=>{
    if(!hasRendered){
        ReactDOM.render(jsx, document.getElementById('app'))
        hasRendered = true
    }
}
ReactDOM.render(<LoadingPage />, document.getElementById('app'))

firebase.auth().onAuthStateChanged((user)=>{
    if(user){
        store.dispatch(login({uid: user.uid}))
        store.dispatch(startSetExpenses()).then(()=>{
            renderApp()
            if(history.location.pathname==='/'){
                history.push('/dashboard')
            }
        })
    }else{
        store.dispatch(logout())
        renderApp()
        history.push('/')
    }
})
