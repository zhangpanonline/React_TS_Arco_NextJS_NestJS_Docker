import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type Todo = {
  id: number
  title: string
  completed: boolean
}

const STORAGE_KEY = 'todomvc-react'
const todoStorage = {
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

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos: (state, action: PayloadAction<string>) => {
      state.todos.push({
        id: Math.floor(Math.random() * 1000),
        title: action.payload,
        completed: false
      })
    }
  }
})