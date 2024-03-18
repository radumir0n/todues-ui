import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export type AuthState = {
    user: any,
    token: string | null,
    isAuthenticated: boolean
}

const initialState: AuthState = {
    user: {},
    token: null,
    isAuthenticated: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action: PayloadAction<Omit<AuthState, 'isAuthenticated'>>) => {
        const { user, token } = action.payload
        state.user = user
        state.token = token
        state.isAuthenticated = true;
    },
    logOut: (state) => {
        state.user = null
        state.token = null
        state.isAuthenticated = false;
    }
  },
})

export const { logIn, logOut } = authSlice.actions

export default authSlice.reducer