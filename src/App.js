import React from 'react';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Navbar } from './components';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box px={20}>
        <Navbar />
      </Box>
    </ChakraProvider>
  );
}

export default App;
