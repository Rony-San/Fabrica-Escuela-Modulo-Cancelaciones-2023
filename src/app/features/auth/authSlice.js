import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuthenticated: false,
        user: null,
        role: 'student',
        error: null,
    },
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuthenticated = true
            state.user = action.payload.user
            state.error = null
        },
        loginFailure: (state, action) => {
            state.isAuthenticated = false
            state.user = null
            state.error = action.payload.error
        },
        logout: (state) => {
            state.isAuthenticated = false
            state.user = null
            state.error = null
        },
        changeRole: (state, action) => {
            state.role = action.payload.role
        }
    }
})

export const { loginSuccess, loginFailure, logout, changeRole } = authSlice.actions
export default authSlice.reducer