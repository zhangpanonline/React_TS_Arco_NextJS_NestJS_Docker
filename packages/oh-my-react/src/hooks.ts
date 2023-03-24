import { useState, useEffect } from 'react'
import { todoStorage, Todo } from './App'

export const useTodos = (initData: Array<Todo>) => {
  const [todos, setTodos] = useState(initData)
  
  useEffect(() => {
    todoStorage.save(todos)
  }, [todos])

  const addTodos = (title: string): void => {
    setTodos([...todos, { id: Math.floor(Math.random() * 1000), title, completed: false }])
  }
  const updateTodos = (editTodo: Todo): void => {
    const todo = todos.find(v => v.id === editTodo.id)
    if (!todo) return
    todo.title = editTodo.title
    todo.completed = editTodo.completed
    setTodos([ ...todos ])
  }
  const removeTodo = (id: number): void => {
    setTodos(todos.filter(v => v.id !== id))
  }

  return { todos, setTodos, addTodos, updateTodos, removeTodo }
}