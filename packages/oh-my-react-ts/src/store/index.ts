import { configureStore } from '@reduxjs/toolkit'
import counterSlice from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterSlice
  }
})

// 反推 RootState 和 AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store