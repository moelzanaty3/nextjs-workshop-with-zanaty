/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note: {id} </h1>

      <button onClick={e => router.push('/')} sx={{ variant: 'containers.button' }}>
        Go Home
      </button>
    </div>
  )
}

/**
 * There's a pages with dynamic routes.
 * For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc.
 */
