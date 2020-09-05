import React from 'react'
import { shallow } from 'enzyme'
import expenses from '../fixtures/expenses'
import { ExpensesSummary } from '../../components/expenses-summary'

test('Should render expense summary for 1 expense correctly', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={1} expensesTotal={123.90}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Should render expense summary for multiple expense correctly', ()=>{
    const wrapper = shallow(<ExpensesSummary expenseCount={2} expensesTotal={12367.90}/>)
    expect(wrapper).toMatchSnapshot()
})