import './App.css'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import AddTodo from './AddTodo'
import AuthWrapper from './AuthWrapper'
import { Role, selectRole, setRole } from './store/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useRequest, useTitle } from 'ahooks'
import { useEffect } from 'react'
import { setTodos } from './store/todosSlice'

function getTodos() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(JSON.parse(localStorage.getItem('todomvc-react') || '[]'))
    }, 2000)
  })
}

export default function App() {
  const role = useSelector(selectRole)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(setRole(''))
    navigate('/login')
  }

  useTitle('TodoMVC')

  const { data, loading } = useRequest(getTodos)

  useEffect(() => {
    if (data) {
      dispatch(setTodos(data))
    }
  }, [data])

  return (
    <div className="App">
      <h2>你好，{role}</h2>
      <button onClick={() => onLogout()} >注销</button>
      <hr/>
      <h2>待办事项</h2>
      <AuthWrapper roles={[Role.admin]}>
        <AddTodo></AddTodo>
      </AuthWrapper>
      { loading ? <p>loading...</p> : <TodoList></TodoList> }
      <TodoFilter></TodoFilter>
    </div>
  )
}
