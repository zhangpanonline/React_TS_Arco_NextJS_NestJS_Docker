import { useParams, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import type { RootState } from './store/index'
import { useForm, SubmitHandler  } from 'react-hook-form'
import { Todo, updateTodos } from './store/todosSlice'
import { useTitle } from 'ahooks'
export default function EditTodo() {
  const { id } = useParams()
  const todo = useSelector((state: RootState) => state.todos.todos.find(v => v.id === +id!) || { id: -1, title: '', completed: false })
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const { register, handleSubmit, formState: { errors } } = useForm({ defaultValues: todo })

  const onSubmit: SubmitHandler<Todo> = data => {
    console.log(data)
    dispatch(updateTodos(data))
    navigate('/')
  }

  useTitle(todo.title + ' | edit')

  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <p>
        <label>
          <span>title：</span>
          <input type='text' {...register('title', { required: true })} aria-invalid={errors.title ? 'true' : 'false'}  />
          {errors.title?.type === 'required' && <p role="alert">First name is required</p>}
        </label>
      </p>
      <p>
        <label>
          <span>checkbox：</span>
          <input type='checkbox' { ...register('completed') } />
        </label>
      </p>
      <p>
        <button type='submit' >保存</button>
        <button type='button' onClick={() => navigate(-1)} >取消</button>
      </p>
    </form>
  )
}