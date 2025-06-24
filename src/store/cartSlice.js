import { createSlice } from "@reduxjs/toolkit";


export const cartSlice=createSlice({
    name:"cart",

    initialState:{
        add:0
    },

    reducers:{
        incrementCount:(state)=>{
            state.count=state.count+1;
        },

        decrementCount:(state)=>{
            state.count=state.count-1;
        },

        add:(state)=>{
            state.count=0;
        }
    }
});


export const {incrementCount,decrementCount,add}=cartSlice.actions;

export default cartSlice.reducer;