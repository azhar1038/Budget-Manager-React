import React from 'react'
import { shallow } from 'enzyme'
import {EditExpensePage} from '../../components/edit-expense-page'
import expenses from '../fixtures/expenses'

let wrapper, startEditExpense, startRemoveExpense, history

beforeEach(()=>{
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(
        <EditExpensePage
            startEditExpense={startEditExpense}
            startRemoveExpense={startRemoveExpense}
            history={history}
            expense={expenses[0]}
        />
    )
})

test('Should render edit expense page correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should handle edit expense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('Should handle remove expense', ()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(startRemoveExpense).toHaveBeenLastCalledWith(expenses[0].id)
})