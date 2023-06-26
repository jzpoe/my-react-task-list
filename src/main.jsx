import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider, CSSReset, extendTheme, Box } from '@chakra-ui/react';
import App from './App';
import './index.css';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
        padding: 0,
      },
    },
  },
});

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <CSSReset />
    {/* <Box
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.5)), url('https://assets.asana.biz/m/5718a254c9823a03/webimage-article-project-management-make-better-to-do-lists-2x.png')`}
      
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
    > */}
    <Box>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Box>
  </ChakraProvider>,
  
  document.getElementById('root')
);