// pages/index.js

import Layout from '../components/MyLayout.js'
import Link from 'next/link'


// Component for each post link
const PostLink = (props) => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)


export default () => (
  <Layout>
    <h1>My Blog</h1>
    <ul>
      <PostLink title="Hello Next.js"></PostLink>
      <PostLink title="Learn Next.js is awesome"></PostLink>      
      <PostLink title="Deploy apps with Zeit"></PostLink>
    </ul>
  </Layout>
)