import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default state', ()=>{
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('Should remove expense by id', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('Should not remove expense if id is not found', ()=>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Should add an expense', ()=>{
    const expense = {
        id: '4',
        description: 'Test 4',
        note: '',
        createdAt: 2000
    }
    const state = expensesReducer(expenses, {type: 'ADD_EXPENSE', expense})
    expect(state).toEqual([...expenses, expense])
})

test('Should edit an expense', ()=>{
    const updates = {
        description: 'Updated expense',
        createdAt: 3000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[0].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[0]).toEqual({...expenses[0], ...updates})
})

test('Should not edit an expense if id not found', ()=>{
    const updates = {
        description: 'Updated expense',
        createdAt: 3000
    }
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})