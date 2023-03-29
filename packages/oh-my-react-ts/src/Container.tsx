// 容器性组件
type Props = {
  title: string
}

export const Container = ({ title, children }: React.PropsWithChildren<Props>) => {
  return <div style={ { border: '1px solid #000', padding: '20px' } } >
    <h1>{ title }</h1>
    <div>{ children }</div>
  </div>
}