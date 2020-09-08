import React from 'react'
import {shallow} from 'enzyme'
import LoadingPage from '../../components/loading-page'

test('Should render loading page correctly', ()=>{
    const wrapper = shallow(<LoadingPage />)
    expect(wrapper).toMatchSnapshot()
})