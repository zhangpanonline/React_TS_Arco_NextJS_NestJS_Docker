import type { Middleware } from '@reduxjs/toolkit'
import { todoStorage } from '../store/todosSlice'

const storageMiddleware: Middleware = (store) => (next) => (action) => {
  if (action.type.startsWith('todos/')) {
    next(action)
    todoStorage.save(store.getState().todos.todos)
  } else {
    next(action)
  }
}

export default storageMiddleware