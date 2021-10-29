import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default () => {
  const router = useRouter()
  const notes = new Array(5).fill(1).map((e, i) => ({ id: i, title: `Note: ${i}` }))

  return (
    <div>
      <h1>Notes</h1>

      {notes.map(note => (
        <div key={note.id}>
          <Link key={note.id} href="/notes/[id]" as={`/notes/${note.id}`}>
            <a>
              <strong>{note.title}</strong>
            </a>
          </Link>
        </div>
      ))}

      <button onClick={e => router.push('/')}>Go Home</button>
    </div>
  )
}

/**
 * The router will automatically route files named index to the root of the directory.
 * pages/index.js → /
 * pages/blog/index.js → /blog
 */
