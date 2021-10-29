import React from 'react'
import Link from 'next/link'
import Navigation from '../src/components/Navigation'

const Page = () => (
  <div>
    <Navigation />
    <h1>Index Page</h1>
  </div>
)

export default Page

/**
 * Each page is associated with a route based on its file name.
 * For example, If you create pages/about.js that exports a React component will be accessible at /about.
 */
