import moment from 'moment'
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters'

test('Should generate set start date action object', ()=>{
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        date: moment(0)
    })
})

test('Should generate set end date action object', ()=>{
    const action = setEndDate(moment(0))
    expect(action).toEqual({
        type: 'SET_END_DATE',
        date: moment(0)
    })
})

test('Should generate set text filter action object with provided text', ()=>{
    const action = setTextFilter('test')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'test'
    })
})

test('Should generate set text filter action object to clear filter text', ()=>{
    const action = setTextFilter()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('Should generate sort by amount filter action object', ()=>{
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('Should generate sort by date filter action object', ()=>{
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})