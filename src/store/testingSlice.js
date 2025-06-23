import { createSlice } from "@reduxjs/toolkit";


export const testingSlice=createSlice({
    name:"test",

    initialState:{
        count:0
    },

    reducers:{
        incrementCount:(state)=>{
            state.count=state.count+1;
        },

        decrementCount:(state)=>{
            state.count=state.count-1;
        },

        reset:(state)=>{
            state.count=0;
        }
    }
});


export const {incrementCount,decrementCount,reset}=testingSlice.actions;

export default testingSlice.reducer;