import { createSlice } from '@reduxjs/toolkit'
import { message } from 'antd'

import User from '../../model/user'

const strUser = localStorage.getItem('user') || '{}'
const initialState: User = JSON.parse(strUser)

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            localStorage.setItem('user', JSON.stringify(action.payload))
            message.success('Login successfully')
            return action.payload
        },
        logout: (state) => {
            localStorage.removeItem('user')
            message.info('Good bye')
            state = initialState
        },
    },
})

export const { loginSuccess, logout } = authSlice.actions

export default authSlice.reducer
