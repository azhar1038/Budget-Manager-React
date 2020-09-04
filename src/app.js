import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css';
import 'react-dates/initialize';

import { addExpense } from './actions/expenses'
import { setTextFilter } from './actions/filters'
import AppRouter from './routers/app_router'
import getVisibleExpenses from './selectors/expenses'
import configureStore from './stores/configure-store'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({
    description: "Water Bill",
    amount: 90000,
    createdAt: 100
}))

store.dispatch(addExpense({
    description: "Gas Bill",
    amount: 80000,
    createdAt: 2000
}))

store.dispatch(addExpense({
    description: "Rent",
    amount: 450000,
    createdAt: 1029
}))

store.dispatch(setTextFilter('water'))

const state = store.getState()
console.log(getVisibleExpenses(state.expenses, state.filters))

const jsx = (
    <Provider store={store}>
        <AppRouter />    
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))