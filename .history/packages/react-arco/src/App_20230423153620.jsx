import { useState, useMemo } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from '@arco-design/web-react'
// import '@arco-design/web-react/dist/css/arco.css'
import { routes, getFlattenRoutes } from './routes'
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { IconDashboard } from '@arco-design/web-react/icon'

function App() {
  const flattenRoutes = useMemo(() => getFlattenRoutes(routes) || [], [routes])
  return (
    <BrowserRouter>
      <div className="App">
        <nav>
          <NavLink to='/dashboard' ><IconDashboard />dashboard</NavLink>
          |||
          <NavLink to='/example' >example</NavLink>
        </nav>
        <Routes>
          {flattenRoutes.map(v => {
            return (<Route key={v.key} path={`/${v.key}`} element={v.component} />)
          })}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
