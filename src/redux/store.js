import { configureStore } from '@reduxjs/toolkit';
// import { createReducer, createAction, createSlice } from '@reduxjs/toolkit';
// import { userSlise } from './userSlice';
import { clicksSlise } from './clicksSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
// import { createStore } from 'redux'

import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage
}

const persistedClicksReducer = persistReducer(persistConfig, clicksSlise.reducer)

///////////////////slice/////////////////////
// const mySlice = createSlice({
//     name: "myValue",
//     initialState: 100,
//     reducers: {
//         increment(state, action) {
//             return state + action.payload
//         },
//         decrement(state, action) {
//             return state - action.payload
//         }
//     }
// });

// export const store = configureStore({
//     reducer: {
//         myValue: mySlice.reducer,
//         user: userSlise.reducer
//     },
// });

// export const {increment, decrement} = mySlice.actions

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


///////////////////////////redux persist//////////////////////////

export const store = configureStore({ 
    reducer: {
        clicks: persistedClicksReducer,
        
    },
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)