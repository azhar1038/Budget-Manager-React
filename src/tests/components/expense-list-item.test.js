import React from 'react'
import { shallow } from 'enzyme'
import ExpenseListItem from '../../components/expense-list-item'
import expenses from '../fixtures/expenses'

test('Should render expense list item', ()=>{
    const wrapper = shallow(<ExpenseListItem {...expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})