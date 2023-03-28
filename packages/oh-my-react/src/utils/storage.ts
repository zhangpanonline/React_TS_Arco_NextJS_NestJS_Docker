import type { PayloadAction } from '@reduxjs/toolkit'
import { todoStorage } from '../store/todosSlice'

// TODO
const storageMiddleware = (store) => (next: (arg0: { payload: void; type: string }) => void) => (action: PayloadAction) => {
  if (action.type.startsWith('todos/')) {
    next(action)
    todoStorage.save(store.getState().todos.todos)
  } else {
    next(action)
  }
}



export default storageMiddleware