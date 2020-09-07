import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {
    startAddExpense,
    addExpense,
    startRemoveExpense,
    removeExpense,
    startEditExpense,
    editExpense,
    setExpenses,
    startSetExpenses
} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const uid = "testuidfortesting"
const defaultAuthState = {auth: { uid } }
const createMockStore = configureMockStore([thunk])

beforeEach((done)=>{
    const expenseData = {}
    expenses.forEach(({id, description, amount, note, createdAt})=>{
        expenseData[id] = {description, amount, note, createdAt}
    })
    database.ref(`users/${uid}/expenses`).set(expenseData).then(()=>done())
})

test('Should setup remove expense action object', ()=>{
    const action = removeExpense('1234')
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '1234'
    })
})

test('Should remove expense from firebase', (done)=>{
    const store = createMockStore(defaultAuthState)
    const id = expenses[1].id
    store.dispatch(startRemoveExpense(id)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})

test('Should setup edit expense action object', ()=>{
    const action = editExpense('123qwe', { note: 'testing note' })
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123qwe',
        updates: { note: 'testing note' }
    })
})

test('Should update expense from firebase', (done)=>{
    const store = createMockStore(defaultAuthState)
    const updates = {
        description: 'updated',
        note: 'updated note',
        amount: 1234,
        createdAt: 122222
    }
    const id = expenses[2].id
    store.dispatch(startEditExpense(id, updates)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(updates)
        done()
    })
})

test('Should setup add expense action object with provided values', ()=>{
    const action = addExpense(expenses[0])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0],
    })
})

test('Should add expense to database and store', (done)=>{
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Laptop',
        amount: 5000000,
        note: 'NITRO',
        createdAt: 1525244
    }
    store.dispatch(startAddExpense(expenseData)).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id: expect.any(String)
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should add expense with default values to database and store', (done)=>{
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 0
    }
    store.dispatch(startAddExpense()).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense:{
                ...expenseData,
                id: expect.any(String)
            }
        })
        return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')
    }).then((snapshot)=>{
        expect(snapshot.val()).toEqual(expenseData)
        done()
    })
})

test('Should setup set expenses action object', ()=>{
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('Should fetch the expenses from the firebase', (done)=>{
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then(()=>{
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})