/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default ({ note }) => {
  const router = useRouter()
  console.log(note)
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>Note: {note.title} </h1>

      <button
        onClick={e => router.push('/')}
        sx={{ variant: 'containers.button' }}
      >
        Go Home
      </button>
    </div>
  )
}

export async function getServerSideProps({ params, req, res }) {
  try {
    const response = await fetch(`http://localhost:3000/api/note/${params.id}`)
    if (!response.ok) {
      res.writeHead(302, { Location: '/notes' })
      res.end()
      return { props: {} }
    }

    const { data } = await response.json()
    if (data) {
      return {
        props: {
          note: data,
        },
      }
    }
  } catch (error) {
    console.log(error.json())
  }
}

/**
 * There's a pages with dynamic routes.
 * For example, if you create a file called pages/posts/[id].js, then it will be accessible at posts/1, posts/2, etc.
 */
