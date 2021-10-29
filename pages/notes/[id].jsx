import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Note: {id} </h1>

      <Link href="/notes">
        <a>Notes</a>
      </Link>
      <button onClick={e => router.push('/')}>Go Home</button>
    </div>
  )
}

/**
 * There's a pages with dynamic routes.
 * For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc.
 */
