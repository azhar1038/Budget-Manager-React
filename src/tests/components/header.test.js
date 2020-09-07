import React from 'react'
import { shallow } from 'enzyme'
import { Header } from '../../components/header'

let startLogout, wrapper

beforeEach(()=>{
    startLogout = jest.fn()
    wrapper = shallow(<Header startLogout={startLogout} />)
})

test('Should render header correctly',()=>{
    expect(wrapper).toMatchSnapshot()
})

test('Should call startLogout on button click', ()=>{
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})