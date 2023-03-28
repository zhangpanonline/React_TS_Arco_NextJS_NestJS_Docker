import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodos } from './store/todosSlice'
export default function addTodo() {
  const [newTodo, setNewTodo] = useState('')
  const dispatch = useDispatch()
  
  const changeNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value)
  }
  
  const onAddTodo = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter' && newTodo) {
      dispatch(addTodos(newTodo))
      setNewTodo('')
    }
  }

  return (
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
  )
}