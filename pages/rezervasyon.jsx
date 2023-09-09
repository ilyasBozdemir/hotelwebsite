import React, { lazy, Suspense } from "react";
import Head from "next/head";
import { Center, Stack, Text } from "@chakra-ui/react";
import DemoReservationPage from "../components/DemoReservationPage";

export default function ReservationPage() {
  const desc = `Mükemmel tatilinizi planlamak için tek yapmanız gereken otel rezervasyon sayfamıza göz atmak! Odalarımız hızla doluyor, acele edin!`;
  const canonicalUrl = 'https://www.guvenotell.com/rezervasyon';
  const keywords = `otel rezervasyon, online rezervasyon, güven otel, ermenek`

  return (
    <>
      <Head>
        <title>Güven Otel - Ermenek • Online Rezervasyon Yapın</title>
        <link rel="canonical" href={canonicalUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Güven Otel" />
        <meta name="twitter:description" content={desc} />

        <meta name="twitter:site" content="" />
        <meta name="og:title" content="Güven Otel" />
        <meta name="og:description" content={desc} />
        <meta name="og:type" content="website" />
        <meta charset="utf-8" />
        <meta
          name="google-site-verification"
          content="nT-gjFplTL9A7HSiOVq0-yMDbLSEh6Nb-7UV2Jr4QAk"
        />
        <meta name="keywords" content={keywords} />
        <meta itemprop="name" content="Güven Otel" />
        <meta itemprop="description" content={desc} />
        <meta name="description" content={desc} />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Turkish" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="ilyas Bozdemir,bozdemir.ib70@gmail.com" />
        <meta name="publisher" content="ilyas Bozdemir" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <script src="https://www.google.com/recaptcha/api.js?render=sitekey"></script>


      </Head>
      <Stack direction={"column"} mt={20} py={30}>
        <Center>
          <Stack>
            <Text p={5} >
             <DemoReservationPage/>
            </Text>
          </Stack>
        </Center>

      </Stack>
    </>
  )
}

