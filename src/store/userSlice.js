import { createSlice } from '@reduxjs/toolkit'

// const [test,setTest]=useState(0);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    Name:"",
    age:""

  },
  reducers: {
    setUserInfo:(state,action)=>{
        state.Name=action.payload.Name;
        state.age=action.payload.age;
    },
    resetUserInfo:(state)=>{
        state.Name="hgdakjgjd",
        state.age="akjsdhkajhdk"
    }
  
  },
})

// Action creators are generated for each case reducer function

export const {setUserInfo,resetUserInfo}=userSlice.actions;


export default userSlice.reducer