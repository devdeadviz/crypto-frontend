import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Navbar } from './components';
import { Crypto } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#e6e6e6">
        <Navbar />
        <Crypto />
      </Box>
    </ChakraProvider>
  );
}

export default App;
