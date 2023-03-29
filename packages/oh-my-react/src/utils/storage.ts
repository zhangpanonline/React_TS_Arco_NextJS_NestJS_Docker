import type { PayloadAction } from '@reduxjs/toolkit'
import { todoStorage } from '../store/todosSlice'

// TODO
const storageMiddleware = (store) => (next) => (action: PayloadAction) => {
  if (action.type.startsWith('todos/')) {
    next(action)
    todoStorage.save(store.getState().todos.todos)
  } else {
    next(action)
  }
}

export default storageMiddleware