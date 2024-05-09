import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoggedin: false,
    userData: null
}

const authSlice = createSlice({
    name: "auth",
    initialState: initialState,
    reducers: {
        login : (state, action) => {
            state.userData = action.payload,
            state.isLoggedin = true
        },

        logout: (state, action) => {
            state.userData = null,
            state.isLoggedin = false
        }
    }
});

export const authStatus = (state : any) => state.auth;
export const {login, logout} = authSlice.actions;
export default authSlice.reducer;