import React from 'react'
import { shallow } from 'enzyme'
import Header from '../../components/header'

test('Should render header correctly',()=>{
    const wrapper = shallow(<Header />)
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find('h1').text()).toBe('Expensify')
//     const renderer = new ReactShallowRenderer()
//     renderer.render(<Header />)
//     expect(renderer.getRenderOutput()).toMatchSnapshot()
})