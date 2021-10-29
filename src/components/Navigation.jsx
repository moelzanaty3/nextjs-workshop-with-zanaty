import React from 'react'
import Link from 'next/link'

export default function Navigation() {
  return (
    <div>
      <Link href="/notes">
        <a>notes</a>
      </Link>
    </div>
  )
}
