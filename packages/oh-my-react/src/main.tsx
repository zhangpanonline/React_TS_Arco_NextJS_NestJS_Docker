import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './store'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import router from './routes'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={ store } >
    <React.StrictMode>
      <RouterProvider router={router} ></RouterProvider>
    </React.StrictMode>
  </Provider>
)
