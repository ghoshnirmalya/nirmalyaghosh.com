import Post from './Post'

interface AllMarkdownRemark {
  totalCount: number
  edges: { node: Post }[]
}

export default AllMarkdownRemark
