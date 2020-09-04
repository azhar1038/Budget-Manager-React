import { addExpense, removeExpense, editExpense } from '../../actions/expenses'

test('Should setup remove expense action object', ()=>{
    const action = removeExpense('1234')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
})

test('Should setup update expense action object', ()=>{
    const action = editExpense('123qwe', { note: 'testing note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123qwe',
        updates: { note: 'testing note' }
    })
})

test('Should setup add expense action object with provided values', ()=>{
    const expense = {
        description: 'Expense',
        note: 'A note',
        amount: 12300,
        createdAt: 1200
    }
    const action = addExpense(expense)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense:{
            ...expense,
            id: expect.any(String)
        }
    })
})

test('Shoukd setup add expense action object with default values', ()=>{
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '',
            amount: 0,
            note: '',
            createdAt: 0
        }
    })
})