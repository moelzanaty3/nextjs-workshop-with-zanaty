/** @jsxRuntime classic */
// [This will raise error due to the new JSX runtime feature introduced by React 17 shorturl.at/isPX7]
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'

export default function Navigation() {
  return (
    <header sx={{ variant: 'containers.header' }}>
      <nav sx={{ variant: 'containers.nav' }}>
        <Link href="/">
          <a sx={{ variant: 'containers.logo' }}>Note App</a>
        </Link>

        <Link href="/notes">
          <a sx={{ variant: 'containers.navLink' }}>Notes</a>
        </Link>
      </nav>
    </header>
  )
}
