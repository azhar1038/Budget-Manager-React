import moment from 'moment'
import filtersReducer from '../../reducers/filters'

test('Should set up default filter values', ()=>{
    const state = filtersReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual({
        text:'',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
})

test('Should set sortBy to amount', ()=>{
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'})
    expect(state.sortBy).toBe('amount')
})

test('Should set sortBy to date', ()=>{
    const currentState = {
        text: '',
        sortBy: 'amount',
        startDate: undefined,
        endDate: undefined
    }
    const state = filtersReducer(currentState, {type: 'SORT_BY_DATE'})
    expect(state.sortBy).toBe('date')
})

test('Should set text filter', ()=>{
    const text = 'test'
    const state = filtersReducer(undefined, {type: 'SET_TEXT_FILTER', text})
    expect(state.text).toBe(text)
})

test('Should set start date filter', ()=>{
    const date = moment(1000)
    const state = filtersReducer(undefined, {type: 'SET_START_DATE', date})
    expect(state.startDate).toBe(date)
})

test('Should set end date filter', ()=>{
    const date = moment(1000)
    const state = filtersReducer(undefined, {type: 'SET_END_DATE', date})
    expect(state.endDate).toBe(date)
})