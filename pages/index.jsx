/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
import Navigation from '../src/components/Navigation'
import styles from '../src/styles.module.css'

// Global CSS cannot be imported from files other than your Custom <App>.
// import '../src/styles.css'
const Page = ({ content }) => (
  <div sx={{ height: `calc(100vh - 60px)` }}>
    <div
      sx={{
        variant: 'containers.page',
        display: 'flex',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <h1 sx={{ fontSize: 8, my: 0 }}>{content.title}</h1>
    </div>
  </div>
)
export default Page

export async function getStaticProps() {
  return {
    props: {
      content: {
        title: 'This is a really done note taking app.',
      },
    },
  }
}

/**
 * Each page is associated with a route based on its file name.
 * For example, If you create pages/about.js that exports a React component will be accessible at /about.
 */
