// lazy lets you defer loading component’s code until it is rendered for the first time.
// lazy returns a React component you can render in your tree. 
// While the code for the lazy component is still loading, attempting to render it will suspend.
// Use < Suspense > to display a loading indicator while it’s loading.
import { lazy, Suspense } from 'react'

export const routes = [
  {
    name: 'dashboard',
    key: 'dashboard'
  },
  {
    name: 'example',
    key: 'example'
  }
]

export function getFlattenRoutes(routes) {
  const res = []
  travel(routes)
  function travel(_routes) {
    _routes.forEach(v => {
      const Component = lazy(() => import(`./${v.key}.jsx`))
      v.component = (
        <Suspense><Component /></Suspense>
      )
      res.push(v)
      if (Array.isArray(v.children) && v.children.length > 0) {
        travel(v.children)
      }
    })
  }
  return res
}

