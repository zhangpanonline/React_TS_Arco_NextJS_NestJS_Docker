import { createSlice, createSelector } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { VisibilityFilters } from './visibilitySlice'
import type { RootState } from './index'

export type Todo = {
  id: number
  title: string
  completed: boolean
}

const STORAGE_KEY = 'todomvc-react'
export const todoStorage = {
  fetch() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save(todos: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}

export interface TodoState {
  todos: Array<Todo>
}

const initialState: TodoState = {
  todos: todoStorage.fetch()
}

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Math.floor(Math.random() * 1000),
        title: action.payload,
        completed: false
      })
    },
    setTodos: (state, action: PayloadAction<Todo[]>) => {
      state.todos = action.payload
    },
    updateTodos: (state, action: PayloadAction<Todo>) => {
      const todo = state.todos.find(v => v.id === action.payload.id)
      if (!todo) return
      Object.assign(todo, action.payload)
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      const idx = state.todos.findIndex(v => v.id === action.payload)
      state.todos.splice(idx, 1)
    }
  }
})

export const selectFilteredTodos = createSelector(
  (state: RootState) => state.visibility,
  (state: RootState) => state.todos.todos,
  (visibility, todos) => { // 接收输入并执行派生逻辑
    switch (visibility) {
      case VisibilityFilters.SHOW_ACTIVE:
        return todos.filter((todo: Todo) => todo.completed === false)
      case VisibilityFilters.SHOW_COMPLETED:
        return todos.filter((todo: Todo) => todo.completed === true)
      default:
        return todos
    }
  }
)

export const { addTodos, updateTodos, removeTodo, setTodos } = todosSlice.actions

export default todosSlice.reducer