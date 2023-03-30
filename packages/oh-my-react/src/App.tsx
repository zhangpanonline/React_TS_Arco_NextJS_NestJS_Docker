import './App.css'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import AddTodo from './AddTodo'
import AuthWrapper from './AuthWrapper'
import { Role, selectRole, setRole } from './store/userSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
export default function App() {
  const role = useSelector(selectRole)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onLogout = () => {
    dispatch(setRole(''))
    navigate('/login')
  }

  return (
    <div className="App">
      <h2>你好，{role}</h2>
      <button onClick={() => onLogout()} >注销</button>
      <hr/>
      <h2>待办事项</h2>
      <AuthWrapper roles={[Role.admin]}>
        <AddTodo></AddTodo>
      </AuthWrapper>
      <TodoList></TodoList>
      <TodoFilter></TodoFilter>
    </div>
  )
}
