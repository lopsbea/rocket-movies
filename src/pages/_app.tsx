import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider>
      <Head>
        <title>RocketMovies</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
};

export default App;
