import React from 'react'
import { shallow } from 'enzyme'
import {EditExpensePage} from '../../components/edit-expense-page'
import expenses from '../fixtures/expenses'

let wrapper, editExpense, removeExpense, history

beforeEach(()=>{
    editExpense = jest.fn()
    removeExpense = jest.fn()
    history = {
        push: jest.fn()
    }
    wrapper = shallow(
        <EditExpensePage
            editExpense={editExpense}
            removeExpense={removeExpense}
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
    expect(editExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
})

test('Should handle remove expense', ()=>{
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(removeExpense).toHaveBeenLastCalledWith(expenses[0].id)
})