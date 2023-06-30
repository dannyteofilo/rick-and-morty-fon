import { configureStore } from '@reduxjs/toolkit'
import characterSlice from './slice/characterSlice'

export const store = configureStore({
  reducer: { character: characterSlice },

})
