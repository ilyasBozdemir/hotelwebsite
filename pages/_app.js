// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/index";
import theme from "../src/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <>
        <Component {...pageProps} />
      </>
    </ChakraProvider>
  );
}

export default MyApp;
