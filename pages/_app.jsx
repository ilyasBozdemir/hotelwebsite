import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/index";
import theme from "../src/theme";
import App from "next/app";
import Page404 from "../components/Page404";
import AOS from 'aos';
import 'aos/dist/aos.css';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    try {
      if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
      }
    } catch (err) {
      console.error(err);
      ctx.statusCode = err.statusCode || 500;
      pageProps.statusCode = ctx.statusCode;
    }

    // HSTS özelliğini etkinleştirin
    if (ctx.res) {
      ctx.res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
    }

    return { pageProps };
  }

  componentDidMount() {

    if (typeof window !== "undefined") {
      setTimeout(() => {
        import("@chakra-ui/react").then(() => {
          // Çoklu React render etme hatası önleme için:
          // eslint-disable-next-line no-underscore-dangle
          // window._REACT_DEVTOOLS_GLOBAL_HOOK_.inject = function () {};
        });

        AOS.init({
          // Global settings
          disable: false,
          startEvent: 'DOMContentLoaded',
          useClassNames: false,
        });

      }, 0);
    }

  }


  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        {pageProps.statusCode ? (
          <Page404 statusCode={pageProps.statusCode} />
        ) : (
          <ChakraProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChakraProvider>
        )}
      </>
    );
  }
}

export default MyApp;