import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './store/counterSlice'
import type { RootState } from './store/index'

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value)

  const dispatch = useDispatch()

  return (
    <>
      <button onClick={() => dispatch(increment())} >+</button>
      <span>{ count }</span>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  )
}