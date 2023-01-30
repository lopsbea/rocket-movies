import * as React from 'react';

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react';
import Login from './Login';

function App() {
  // 2. Wrap ChakraProvider at the root of your app

  return <Login />;
}

export default App;
