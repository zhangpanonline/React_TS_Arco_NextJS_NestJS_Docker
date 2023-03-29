// 函数式组件
type Props = {
  message: string
}
export const TodoList: React.FC<Props> = ({ message }) => {
  return <div>{ message }</div>
}