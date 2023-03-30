import { Navigate, useLocation } from 'react-router-dom'
import { selectLogin } from './store/userSlice'
import { useSelector } from 'react-redux'
import React from 'react'
export default function RequireAuth({ children }: React.PropsWithChildren) {
  const isLogin = useSelector(selectLogin)
  const location = useLocation()

  if (isLogin) {
    return <>{ children }</>
  } else {
    return <Navigate to='/login' state={{form: location}} replace />
  }
}