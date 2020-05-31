import {
  Box,
  Stack,
  Link,
  Button,
  IconButton,
  useColorMode,
} from '@chakra-ui/core'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const themeSwitcherButtonNode = () => {
    if (colorMode === 'light') {
      return (
        <IconButton
          aria-label="Switch to dark theme"
          icon="moon"
          size="sm"
          onClick={toggleColorMode}
        />
      )
    }

    return (
      <IconButton
        aria-label="Switch to light theme"
        icon="sun"
        size="sm"
        onClick={toggleColorMode}
      />
    )
  }

  return (
    <Box borderBottomWidth={1}>
      <Box maxW="6xl" mx="auto">
        <Stack
          isInline
          justifyContent="space-between"
          alignItems="center"
          p={4}
          spacing={8}
        >
          <Box>
            <Link>Logo</Link>
          </Box>
          <Box>
            <Stack isInline spacing={8} alignItems="center">
              <Box>
                <Link>Projects</Link>
              </Box>
              <Box>
                <Link>Blogs</Link>
              </Box>
              <Box>{themeSwitcherButtonNode()}</Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Navbar
