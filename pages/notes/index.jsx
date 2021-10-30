/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default ({ notes }) => {
  const router = useRouter()
  return (
    <div sx={{ variant: 'containers.page' }}>
      <h1>My Notes</h1>

      <div
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}
      >
        {notes.map(note => (
          <div sx={{ width: '33%', p: 2 }} key={note.id}>
            <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
              <a sx={{ textDecoration: 'none', cursor: 'pointer' }}>
                <div sx={{ variant: 'containers.card' }}>
                  <strong>{note.title}</strong>
                </div>
              </a>
            </Link>
          </div>
        ))}
      </div>

      <button
        onClick={e => router.push('/')}
        sx={{ variant: 'containers.button' }}
      >
        Go Home
      </button>
    </div>
  )
}

export async function getServerSideProps() {
  try {
    const response = await fetch('http://localhost:3000/api/note')
    const { data } = await response.json()
    return {
      props: {
        notes: data,
      },
    }
  } catch (error) {
    console.log(error.json())
  }
}

/**
 * The router will automatically route files named index to the root of the directory.
 * pages/index.js → /
 * pages/blog/index.js → /blog
 */
