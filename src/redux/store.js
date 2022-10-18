import { configureStore } from '@reduxjs/toolkit';
import { createReducer, createAction, createSlice } from '@reduxjs/toolkit';
import { userSlise } from './userSlice';

///////////////////slice/////////////////////
const mySlice = createSlice({
    name: "meValue",
    initialState: 100,
    reducers: {
        increment(state, action) {
            return state + action.payload
        },
        decrement(state, action) {
            return state - action.payload
        }
    }
});

export const store = configureStore({ 
    reducer: {
        myValue: mySlice.reducer,
        user: userSlise.reducer
    },
});

export const {increment, decrement} = mySlice.actions

////////////////////////////////////////////////
// export const increment = createAction("myValue/increment")
// export const decrement = createAction("myValue/decrement")

// const myReducer = createReducer(0, {
// [increment]: (state, action) => state + action.payload,
// [decrement]: (state, action) => state - action.payload
// });

// export const store = configureStore({
//     reducer: {
//       myValue: myReducer
//   },
// })