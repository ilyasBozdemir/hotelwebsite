// pages/_app.js
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/index";
import theme from "../src/theme";

export default function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}
