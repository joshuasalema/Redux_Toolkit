import { createSlice } from "@reduxjs/toolkit";

const INITIAL_AUTH_STATE = {
    isAuthenticated : false
}
export const authSlice = createSlice({
    name:'authentication',
    initialState: INITIAL_AUTH_STATE,
    reducers:{
        login(state) {
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
});
export const authActions = authSlice.actions;
//export default authSlice;  check why not working