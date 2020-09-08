import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import selectExpenses from '../selectors/expenses'
import totalExpenses from '../selectors/expenses-total'
import numeral from 'numeral'

export const ExpensesSummary = ({expenseCount, expensesTotal})=>{
    const expenseWord = expenseCount > 1? 'expenses': 'expense'
    const formattedTotal = numeral(expensesTotal/100).format('0,0.00')
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>₹{formattedTotal}</span>
                    <div className="page-header__actions">
                        <Link className="button" to="/create">Add Expense</Link>
                    </div>
                </h1>
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    const expenses = selectExpenses(state.expenses, state.filters)
    return {
        expenseCount: expenses.length,
        expensesTotal: totalExpenses(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary)