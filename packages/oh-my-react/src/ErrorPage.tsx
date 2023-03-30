import { useRouteError } from 'react-router-dom'
export default function ErrorPage() {
  const error: any = useRouteError()
  return (
    <>
      <h1>404</h1>
      <p>{error.data}</p>
    </>
  )
}