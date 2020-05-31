import { ThemeProvider, CSSReset, DarkMode, Box } from '@chakra-ui/core'
import Navbar from 'components/navbar'

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider>
      <DarkMode>
        <CSSReset />
        <Navbar />
        <Box maxW="6xl" mx="auto">
          <Component {...pageProps} />
        </Box>
      </DarkMode>
    </ThemeProvider>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default App
