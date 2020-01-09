import PathContext from './PathContext'
import PageResources from './PageResources'
import Data from './Data'

interface PageProps {
  data: Data
  location: Location
  pageResources?: PageResources
  pathContext: PathContext
}

export default PageProps
