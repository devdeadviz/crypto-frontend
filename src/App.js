import React from 'react';
import './App.css';
import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { Navbar } from './components';
import { Crypto } from './pages';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#eff2f5">
        <Navbar />
        <Crypto />
      </Box>
    </ChakraProvider>
  );
}

export default App;
