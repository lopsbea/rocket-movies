import { ChakraProvider } from '@chakra-ui/react'

const App:React.FC<any> = ({ Component, pageProps }) => {
  return (
  <ChakraProvider>
    <Component {...pageProps} />
  </ChakraProvider>
    )
}

export default App;