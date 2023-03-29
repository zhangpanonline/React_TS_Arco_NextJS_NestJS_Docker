import { ChangeEventHandler, FormEvent, KeyboardEvent, KeyboardEventHandler, useEffect, useRef, useState } from 'react'
import './App.css'
import { Container } from './Container'
import { TodoList } from './TodoList'

type ChangeFn = (e: FormEvent<HTMLInputElement>) => void

function App() {
  const [title, setTitle] = useState('容器性组件')
  const ref1 = useRef<HTMLInputElement>(null)
  useEffect(() => {
    ref1.current!.focus()
  }, [ref1.current])


  // 1. FormEvent
  // const onChange: ChangeFn = e => {
  //   setTitle(e.currentTarget.value)
  // }
  // 2. *EventHandler
  const onChange: ChangeEventHandler<HTMLInputElement> = e => {
    setTitle(e.currentTarget.value)
  }

  // 1. *EventHandler
  // const onKeyDown: KeyboardEventHandler<HTMLInputElement> = e => {
  //   if (e.code === 'Enter') {
  //     alert(e.code)
  //   }
  // }
  // 2. *Event
  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'Enter') {
      alert(e.code)
    }
  }

  return (
    <div className="App">
      <Container title={title} >
        <input
          type='text'
          value={title}
          onChange={onChange}
          onKeyDown={onKeyDown}
          ref={ref1} />
        <TodoList message='函数式组件' ></TodoList>
      </Container>
    </div>
  )
}

export default App
