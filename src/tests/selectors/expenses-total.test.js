import getExpensesTotal from '../../selectors/expenses-total'
import expenses from '../fixtures/expenses'

test('Should return 0 if no expenses', ()=>{
    const total = getExpensesTotal()
    expect(total).toBe(0)
})

test('Should correctly add up as single expense', ()=>{
    const total = getExpensesTotal([expenses[1]])
    expect(total).toBe(expenses[1].amount)
})

test('Should correctly add up multiple expenses', ()=>{
    const total = getExpensesTotal([expenses[0], expenses[1]])
    expect(total).toBe(expenses[0].amount + expenses[1].amount)
})