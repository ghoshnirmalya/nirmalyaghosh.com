import { FC } from 'react'
import { Box, Stack, Heading, Text, Image } from '@chakra-ui/core'
import siteConfig from 'config/site'

const Jumbotron: FC = () => {
  return (
    <Stack spacing={2} alignItems="center" py={32}>
      <Box>
        <Image
          size="150px"
          objectFit="cover"
          src={siteConfig.assets.avatar}
          alt={siteConfig.details.title}
          rounded="full"
          borderWidth={2}
          borderColor="brandColor"
          shadow="xl"
        />
      </Box>
      <Box>
        <Heading as="h1" size="2xl">
          Nirmalya Ghosh
        </Heading>
      </Box>
      <Box>
        <Text>
          <Box as="b">Frontend Developer</Box> and <Box as="b">Designer</Box>
        </Text>
      </Box>
    </Stack>
  )
}

export default Jumbotron
