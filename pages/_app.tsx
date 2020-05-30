import {
  ThemeProvider,
  CSSReset,
  ColorModeProvider,
  theme,
} from '@chakra-ui/core'
import Navbar from 'components/navbar'

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    mode: {
      dark: {
        background: {
          100: '#000',
        },
        text: {
          100: '#fff',
        },
      },
      light: {
        background: {
          100: '#fff',
        },
        text: {
          100: '#000',
        },
      },
    },
  },
}

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={customTheme}>
      <ColorModeProvider>
        <CSSReset />
        <Navbar />
        <Component {...pageProps} />
      </ColorModeProvider>
    </ThemeProvider>
  )
}

export function reportWebVitals(metric) {
  console.log(metric)
}

export default App
