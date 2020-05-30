import {
  Box,
  Stack,
  Link,
  Button,
  useColorMode,
  useTheme,
} from '@chakra-ui/core'

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const theme = useTheme()

  return (
    <Box
      // @ts-ignore
      color={theme.colors.mode[colorMode].text}
      // @ts-ignore
      bg={theme.colors.mode[colorMode].background}
    >
      <Box maxW="4xl" mx="auto">
        <Stack isInline justifyContent="space-between">
          <Box>
            <Link>Logo</Link>
          </Box>
          <Box>
            <Stack isInline>
              <Box>
                <Link>Projects</Link>
              </Box>
              <Box>
                <Link>Blogs</Link>
              </Box>
              <Box>
                <Button size="sm" onClick={toggleColorMode}>
                  Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
                </Button>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}

export default Navbar
