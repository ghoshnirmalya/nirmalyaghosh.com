import Link from 'next/link'
import { getSortedPostsData } from 'lib/posts'
import Page from 'components/pages/index'

const IndexPage = ({ allPostsData }) => {
  return (
    <div>
      <Page />
      <ul>
        {allPostsData.map(({ id, title }) => (
          <li key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default IndexPage
