import { createBrowserRouter, redirect } from 'react-router-dom'
import type { ActionFunctionArgs } from 'react-router-dom'
import App from './App'
import Login from './Login'
import EditTodo from './EditTodo'
import { updateTodos } from './store/todosSlice'
import { store } from './store'

export async function editTodoAction({ request, params }: ActionFunctionArgs) {
  const formData = await request.formData()
  const updates = Object.fromEntries(formData)
  const todo = {
    id: (params as any).id * 1,
    title: updates.title as string,
    completed: !!updates.completed
  }
  store.dispatch(updateTodos(todo))

  return redirect('/')
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>
  },
  {
    path: '/login',
    element: <Login></Login>
  },
  {
    // http://127.0.0.1:5173/edit/1
    path: '/edit/:id',
    element: <EditTodo></EditTodo>,
    action: editTodoAction
  }
])

export default router