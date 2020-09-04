import React from 'react'
import {shallow} from 'enzyme'
import {ExpenseListFilters} from '../../components/expense-list-filters'
import {filters, altFilters} from '../fixtures/filters'

let setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate, wrapper

beforeEach(()=>{
    setTextFilter = jest.fn()
    sortByAmount = jest.fn()
    sortByDate = jest.fn()
    setStartDate = jest.fn()
    setEndDate = jest.fn()

    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    )
})

test('Should render ExpenseListFilters correctly', ()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should render ExpenseListFilters with alt data correctly', ()=>{
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('Should handle text change', ()=>{
    const value = "test"
    wrapper.find('input').simulate('change', {
        target: { value }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
})

test('Should sort by date', ()=>{
    const value="date"
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByDate).toHaveBeenCalled()
})

test('Should sort by amount', ()=>{
    const value="amount"
    wrapper.find('select').simulate('change', {
        target: { value }
    })
    expect(sortByAmount).toHaveBeenCalled()
})

test('Should handle date changes', ()=>{
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({
        startDate: altFilters.startDate,
        endDate: altFilters.endDate
    })
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate)
})

test('Should handle date focus change', ()=>{
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')('startDate')
    expect(wrapper.state('calendarFocused')).toBe('startDate')
})