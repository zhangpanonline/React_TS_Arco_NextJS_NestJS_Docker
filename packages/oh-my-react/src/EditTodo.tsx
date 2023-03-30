import { useParams, useNavigate, Form } from 'react-router-dom'
import { useSelector } from 'react-redux'
import type { RootState } from './store/index'
export default function EditTodo() {
  const { id } = useParams()
  const todo = useSelector((state: RootState) => state.todos.todos.find(v => v.id === +id!) || { id: -1, title: '', completed: false })
  const navigate = useNavigate()
  return (
    <Form method='post' >
      <p>
        <label>
          <span>title：</span>
          <input type='text' name='title' defaultValue={todo.title} />
        </label>
      </p>
      <p>
        <label>
          <span>checkbox：</span>
          <input type='checkbox' name='completed' defaultChecked={todo.completed} />
        </label>
      </p>
      <p>
        <button type='submit' >保存</button>
        <button type='button' onClick={() => navigate(-1)} >取消</button>
      </p>
    </Form>
  )
}