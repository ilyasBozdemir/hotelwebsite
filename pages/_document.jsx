import * as React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import createEmotionServer from "@emotion/server/create-instance";
import theme from "../src/theme";
import createEmotionCache from "../src/createEmotionCache";
import { ColorModeScript } from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default class MyDocument extends Document {
  render() {
    const { emotionStyleTags } = this.props;

    return (
      <Html lang="tr">
        <Head>

          <meta name="theme-color" content={"#fff"} />
          <meta
            name="google-site-verification"
            content="nT-gjFplTL9A7HSiOVq0-yMDbLSEh6Nb-7UV2Jr4QAk"
          />

          <meta name="emotion-insertion-point" content="" />
          {emotionStyleTags}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: `
                {
                  "@context": "http://schema.org",
                  "@type": "Organization",
                  "name": "Güven Otel",
                  "telephone": [
                    "+905435403160",
                    "+05312486322"
                  ]
                  "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Oda Mahallesi Belediye Sokak Güneyyurt Belediyesi Yanı, 70400, 70450 Ermenek/Karaman",
                    "addressLocality": "Ermenek",
                    "postalCode": "70450",
                    "addressCountry": "TR"
                  },
                  "email": "info@guvenotell.com",
                  "url": "https://www.guvenotell.com/",
                  "logo": "https://www.guvenotell.com/images/logo.png",
                  "description": "Firma Adı, örnek işler yapan bir firma...",
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": [
                      "+905435403160",
                      "+05312486322"
                    ]
                    "contactType": "Müşteri Hizmetleri"
                  },
                  "openingHours": "Mo-Fr 09:00-22:00"
                }
              `
            }}
          />
        </Head>
        <body>
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);


  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));
  return {
    ...initialProps,
    emotionStyleTags,
  };
};
