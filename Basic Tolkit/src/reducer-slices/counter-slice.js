import { createSlice } from "@reduxjs/toolkit";

const INITIAL_COUNTER_STATE = {counter : 0, showCounter: true};
export const counterSlice = createSlice({
    name:'counter',
    initialState:INITIAL_COUNTER_STATE,
    reducers:{
        increment(state) {
            state.counter++; //Looks mutable but immer package of toolkit handles it internally in a immutable way
        },
        decrement(state) {
            state.counter--;
        },
        increase(state,action) {
            state.counter = state.counter + action.payload.amount;
        },
        toggle(state){
            state.showCounter = !state.showCounter;
        }
    }
})
export const counterActions = counterSlice.actions;
//export default counterSlice; check why not working