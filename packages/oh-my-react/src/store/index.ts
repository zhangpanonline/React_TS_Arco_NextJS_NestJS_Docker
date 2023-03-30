import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import todosReducer from './todosSlice'
import visibilityReducer from './visibilitySlice'
import storageMiddleware from '../utils/storage'

export const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(storageMiddleware),
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    visibility: visibilityReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch