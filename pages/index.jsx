/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui'
import Link from 'next/link'
/**
 * Next.js supports ES2020 dynamic import() for JavaScript. 
 * With it you can import JavaScript modules dynamically and work with them. They also work with SSR.
 * You can think of dynamic imports as another way to split your code into manageable chunks.
 */
import dynamic from 'next/dynamic'
import Navigation from '../src/components/Navigation'
import styles from '../src/styles.module.css'

const DynamicComponent = dynamic(() => import('../src/components/Hello'))

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
      <DynamicComponent />
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

/**
 * REAL-LIFE SCENARIOS
Here are some typical components that would be great for dynamic imports:

- UI components such as modals, drawers, and toggles that don’t display content until an interaction occurs
- Search components that rely on some form of text input or button click
- “Load More” components that render additional content on user interaction
- Module queries from an external API
- Components that are slow loading and could benefit from a loading component while the import resolves
 */