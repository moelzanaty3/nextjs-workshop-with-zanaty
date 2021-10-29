import { useRouter } from 'next/router'
import React from 'react'

export default () => {
  const router = useRouter()

  // params ==== ['1', '2', '3']
  const { params } = router.query

  return (
    <div>
      <code>
        <pre>{JSON.stringify(router.query)}</pre>
      </code>
      <h1>Note ID: {params}</h1>
    </div>
  )
}

/**
 * Catch all routes
 * Dynamic routes can be extended to catch all paths by adding three dots (...) inside the brackets.
 */
