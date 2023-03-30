import { useNavigate } from 'react-router-dom'
export default function Login() {
  const navigate = useNavigate()
  return (
    <>
      <div>login</div>
      <button onClick={() => navigate('/')} >登录</button>
    </>
  )
}