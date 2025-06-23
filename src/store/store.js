import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSlice'
import  testingSlice  from './testingSlice'

export default configureStore({
  reducer: {
    user:userSlice,
    test:testingSlice
  },

})