import React, { useState, useEffect, useRef } from 'react'
import './App.css'
import TodoList from './TodoList'
import { useTodos, useFilter } from './hooks'
import TodoFilter from './TodoFilter'
import Counter from './Counter'

const STORAGE_KEY = 'todomvc-react'
export type Todo = { id: number, title: string, completed: boolean }
export const todoStorage = {
  fetch() {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]')
  },
  save(todos: Todo[]) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }
}
export default function App() {
  const { todos, addTodos, updateTodos, removeTodo } = useTodos(todoStorage.fetch())
  const { visibility, setVisibility, filteredTodos } = useFilter(todos)
  // 表示新增的待办事项的名称
  const [newTodo, setNewTodo] = useState('')
  const changeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }
  // 用户回车且输入框有内容则添加一个新待办
  const onAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && newTodo) {
      addTodos(newTodo)
      setNewTodo('')
    }
  }

  return (
    <div className="App">
      <h2>待办事项</h2>
      <Counter></Counter>
      <div>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="该学啥了?"
          value={newTodo}
          onChange={changeNewTodo}
          onKeyUp={e => onAddTodo(e)}
        />
      </div>
      <TodoList {...{ todos: filteredTodos, removeTodo, updateTodos }} ></TodoList>
      <TodoFilter { ...{ visibility, setVisibility } } ></TodoFilter>
    </div>
  )
}
