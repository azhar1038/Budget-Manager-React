import authReducer from '../../reducers/auth'

test('Should set uid on login', ()=>{
    const uid = "Rtygm6548HyULlkkJh"
    const action = {
        type: 'LOGIN',
        uid
    }
    const state = authReducer({}, action)
    expect(state).toEqual({
        uid
    })
})

test('Should remove uid on logout', ()=>{
    const action = {
        type: 'LOGOUT'
    }
    const state = authReducer({uid: "yUUyYUUu"}, action)
    expect(state).toEqual({})
})