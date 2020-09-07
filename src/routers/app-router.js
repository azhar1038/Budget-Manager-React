import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import LoginPage from '../components/login-page'
import ExpenseDashboardPage from '../components/expense-dashboard-page'
import AddExpensePage from '../components/add-expense-page'
import EditExpensePage from '../components/edit-expense-page'
import NotFoundPage from '../components/not-found-page'
import PrivateRoute from './private-route'
import PublicRoute from './public-route'

export const history = createBrowserHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true} />
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage}/>
                <PrivateRoute path="/create" component={AddExpensePage} />
                <PrivateRoute path="/edit/:id" component={EditExpensePage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter