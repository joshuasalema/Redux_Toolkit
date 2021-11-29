import { createStore } from 'redux';
import  { createSlice , configureStore } from '@reduxjs/toolkit';
import {counterSlice} from '../reducer-slices/counter-slice'
import {authSlice} from '../reducer-slices/auth-slice'
// const counterReducer = (state = INITIAL_STATE ,action) =>{
//     if(action.type === 'increment') {
//         return {...state, counter : state.counter + 1};
//     } 
    
//     if (action.type === 'decrement') {
//         return {...state, counter : state.counter - 1};
//     }
    
//     if (action.type === 'increase') {
//         return {...state, counter : state.counter + action.amount};
//     }

//     if(action.type === 'toggle') {
//         return {...state,showCounter: !state.showCounter}
//     }
//     return state;
// }
// const store = createStore(counterReducer);
 
const store = configureStore({
    reducer: {
        counter:counterSlice.reducer,
        auth:authSlice.reducer
    }
});

//can make one big reducer 
// const store = configureStore({
//     reducer: {
//         counter : counterSlice.reducer
//         someotherReducer: someotherReducer.reducer
//         .
//         . 
//         .
//     }
// });


export default store;