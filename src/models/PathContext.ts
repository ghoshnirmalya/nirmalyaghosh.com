import Post from './Post'

interface PathContext {
  tags?: string[]
  categories?: string[]
  categoryName: string
  tagName?: string
  posts?: Post[]
  next: any
  prev: any
}

export default PathContext
