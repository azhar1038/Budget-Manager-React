import React from 'react'
import {Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import LoginPage from '../components/login-page'
import ExpenseDashboardPage from '../components/expense-dashboard-page'
import AddExpensePage from '../components/add-expense-page'
import EditExpensePage from '../components/edit-expense-page'
import HelpPage from '../components/help-page'
import NotFoundPage from '../components/not-found-page'
import Header from '../components/header'

export const history = createHistory()

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={LoginPage} exact={true} />
                <Route path="/dashboard" component={ExpenseDashboardPage}/>
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit/:id" component={EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
)

export default AppRouter