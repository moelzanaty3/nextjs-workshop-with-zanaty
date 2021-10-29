/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const notes = new Array(12).fill(1).map((e, i) => ({ id: i, title: `Note: ${i}` }))

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

      <button onClick={e => router.push('/')} sx={{ variant: 'containers.button' }}>
        Go Home
      </button>
    </div>
  )
}

/**
 * The router will automatically route files named index to the root of the directory.
 * pages/index.js → /
 * pages/blog/index.js → /blog
 */
