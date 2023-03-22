import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  type todos = {id: number, title: string, completed: boolean}[]
  const [todos, setTodos] = useState<todos>([
    // { id: 0, title: 'react', completed: true },
    // { id: 1, title: 'vue', completed: false },
    // { id: 2, title: 'nodejs', completed: false },
  ])

  const changeChecked = (e: any, curTodo: any) => {
    curTodo.completed = e.target.checked
    setTodos([...todos])
  }

  const [newTodo, setNewTodo] = useState('')
  const oninput = (e: any) => {
    setNewTodo(e.target.value)
  }
  const onKeyUp = (e: any) => {
    if (e.key === 'Enter' && newTodo) {
      setTodos([
        ...todos,
        {
          id: todos.length,
          title: newTodo,
          completed: false
        }
      ])
      setNewTodo('')
    }
  }

  const onRemove = (todo: any) => {
    setTodos(todos.filter(v => v.id !== todo.id))
  }

  const initTodo = { id: -1, title: '', completed: false }

  const [ editTodo, setEditTodo ] = useState(initTodo)

  const onDoubleClick = (todo: any) => {
    setEditTodo(todo)
  }

  const onInput = (e: any) => {
    setEditTodo({ ...editTodo, title: e.target.value })
  }

  const cancelEdit = () => {
    setEditTodo(initTodo)
  }

  const onUpdateTodo = (e: any) => {
    if (e.key === 'Enter') {
      if (editTodo.title) {
        setTodos(todos.map(v => {
          if (v.id === editTodo.id) {
            return editTodo
          } else {
            return v
          }
        }))
      }
      setEditTodo(initTodo)
    }
  }


  return (
    <div className="App">
      <p>代办事项</p>
      <input type="text" placeholder='What needs to be done?' value={newTodo} onInput={e => oninput(e)} onKeyUp={e => onKeyUp(e)} />
      <ul >
        {todos.map((todo, i) => {
          return (
            <li key={todo.id + 'a' + i}>
              <div className={ todo.id === editTodo.id ? 'hidden' : 'visible' }>
                <input type="checkbox" checked={todo.completed} onChange={e => changeChecked(e, todo)} />
                <span data-test="todo-title" onDoubleClick={() => onDoubleClick(todo)}>{todo.title}</span>
                <span onClick={() => onRemove(todo)} >×</span>
              </div>
              <input className={ todo.id === editTodo.id ? 'visible' : 'hidden' } type="text" value={editTodo.title} onInput={e => onInput(e)} onBlur={cancelEdit} onKeyUp={onUpdateTodo} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
