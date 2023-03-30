import { useNavigate } from 'react-router-dom'
import { setRole, Role } from './store/userSlice' 
import { useDispatch } from 'react-redux'
import { useState } from 'react'
export default function Login() {
  const [ role, setUserRole ] = useState(Role.admin)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const onLogin = () => {
    dispatch(setRole(role))
    navigate('/')
  }
  return (
    <>
      <div>login</div>
      <div>
        <input type='radio' name='admin' value='admin' checked={role === 'admin'} onChange={() => setUserRole(Role.admin)} /> admin
        <input type='radio' name='user' value='user' checked={role === 'user'} onChange={() => setUserRole(Role.user)} /> user
      </div>
      <button onClick={() => onLogin()} >登录</button>
    </>
  )
}