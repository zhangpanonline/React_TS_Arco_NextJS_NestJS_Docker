import './App.css'
import TodoList from './TodoList'
import TodoFilter from './TodoFilter'
import AddTodo from './AddTodo'
export default function App() {

  return (
    <div className="App">
      <h2>待办事项</h2>
      <AddTodo></AddTodo>
      <TodoList></TodoList>
      <TodoFilter></TodoFilter>
    </div>
  )
}
