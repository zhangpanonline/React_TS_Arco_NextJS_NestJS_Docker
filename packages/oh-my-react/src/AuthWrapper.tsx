import { selectRole, Role } from './store/userSlice'
import { useSelector } from 'react-redux'
import React from 'react'

type Props = {
  roles: Array<Role.admin | Role.user>
}

export default function Auth({ children, roles }: React.PropsWithChildren<Props>) {
  const role = useSelector(selectRole)

  if (roles.length === 0 || roles.includes(role as Role)) {
    return <>{ children }</>
  } else {
    return <></>
  }
}