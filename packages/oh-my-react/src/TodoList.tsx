import { useEffect, useState } from 'react'
import { Todo } from './App'
import classnames from "classnames"
export default ({ todos, removeTodo, updateTodos }: any) => {
  const changeState = (e: React.ChangeEvent<HTMLInputElement>, currentTodo: Todo) => {
    currentTodo.completed = e.target.checked
    // 必须重新设置状态，否则组件不会重新渲染
    // 更新数组需要全新对象，否则组件不会重新渲染
    updateTodos(currentTodo)
  }

  const initial = {
    id: -1,
    title: '',
    completed: false
  }
  // 正在编辑的待办
  const [editedTodo, setEditedTodo] = useState(initial)

  let inputRef: any
  const setEditInputRef = (e: HTMLInputElement | null, todo: Todo) => {
    if (todo.id === editedTodo.id) {
      inputRef = e
    }
  }

  useEffect(() => {
    if (editedTodo && inputRef) {
      // 设置输入框焦点
      inputRef.focus()
    }
  }, [editedTodo])

  // 用户双击触发编辑模式
  const editTodo = (todo: Todo) => {
    setEditedTodo({ ...todo })
  }
  // 受控组件要求的事件处理
  const onEditing = (e: React.ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value
    if (title) {
      setEditedTodo({ ...editedTodo, title: e.target.value })
    } else {
      // title为空删除该项
      removeTodo(editedTodo.id)
    }
  }
  const onEdited = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // 监听enter
    if (e.code === 'Enter') {
      if (editedTodo.title) {
        updateTodos(editedTodo)
      }
      setEditedTodo(initial)
    }
  }
  const cancelEdit = () => {
    setEditedTodo(initial)
  }

  return (
    <ul className="todo-list">
      {todos.map((todo: Todo) => (
        <li
          className={classnames('todo', { completed: todo.completed, editing: editedTodo.id === todo.id })}
          key={todo.id}>
          <div className="view">
            {/* 受控组件: 赋值和事件处理 */}
            <input
              className="toggle"
              type="checkbox"
              checked={todo.completed}
              onChange={(e) => changeState(e, todo)}
            />
            <span onDoubleClick={() => editTodo(todo)}>{todo.title}</span>
            <button className="destroy" onClick={() => removeTodo(todo.id)}>
                X
            </button>
          </div>
          {/* 声明editedTodo状态, onChange处理状态变化 */}
          {/* onKeyUp处理修改确认，onBlur退出编辑模式 */}
          <input
            className="edit"
            type="text"
            value={editedTodo.title}
            onChange={onEditing}
            onKeyUp={onEdited}
            onBlur={cancelEdit}
            ref={e => setEditInputRef(e, todo)}
          />
        </li>
      ))}
    </ul>
  )
}