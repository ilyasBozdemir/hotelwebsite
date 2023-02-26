import { ChakraProvider } from "@chakra-ui/react";
import Layout from "../layout/index";
import theme from "../src/theme";
import App from "next/app";
import Page404 from "../components/Page404";

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

    return { pageProps };
  }

  componentDidMount() {
    // Bu, hydration hatasını önlemek için gerekli kod parçasıdır.
    // İlk önce bir bileşen dinamik olarak yüklendiyse, hydrate edilmeli ve işleyicileri atamalıyız.
    // Bu kod, özellikle getStaticProps/getServerSideProps ile oluşturulmuş bileşenler için gereklidir.
    if (typeof window !== "undefined") {
      import("@chakra-ui/react").then(() => {
        // Çoklu React render etme hatası önleme için:
        // eslint-disable-next-line no-underscore-dangle
        window._REACT_DEVTOOLS_GLOBAL_HOOK_.inject = function () {};
      });
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