import { FC } from 'react'
import { Box, useColorMode } from '@chakra-ui/core'
import Jumbotron from 'components/pages/index/jumbotron'
import Articles from 'components/pages/index/articles'
import Publications from 'components/pages/index/publications'

const Page: FC = () => {
  const { colorMode } = useColorMode()
  const bgColor = { light: 'gray.100', dark: 'gray.900' }
  const color = { light: 'gray.900', dark: 'gray.100' }

  return (
    <>
      <Box as="section" bg={bgColor[colorMode]} color={color[colorMode]}>
        <Box maxW="6xl" mx="auto" p={4}>
          <Jumbotron />
        </Box>
      </Box>
      <Box as="section">
        <Box maxW="6xl" mx="auto" p={4}>
          <Articles />
        </Box>
      </Box>
      <Box as="section">
        <Box maxW="6xl" mx="auto" p={4}>
          <Publications />
        </Box>
      </Box>
    </>
  )
}

export default Page
