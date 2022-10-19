import { createSlice } from "@reduxjs/toolkit";


export const clicksSlise = createSlice({
    name: "clicks",
    initialState: { value: 0 },
    reducers: {
        update (state, action) {
            // state.value += 1;
            state.value += action.payload 
}
    }
});



export const {update} = clicksSlise.actions