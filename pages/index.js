import Head from "next/head";
import { Inter } from "@next/font/google";

import { AspectRatio, Stack } from "@chakra-ui/react";
import React, { Suspense } from "react";
const inter = Inter({ subsets: ["latin"] });

const Hotel = React.lazy(() => import("../components/Hotel"));
const AboutUs = React.lazy(() => import("../components/AboutUs"));
const Footer = React.lazy(() => import("../components/Footer"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Güven Otel | </title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack as={"main"}>
        <Suspense fallback={<div>Loading...</div>}>
          <Hotel />
          <AboutUs />
          <>
            <AspectRatio ratio={16 / 9}>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25597.420587230703!2d32.79080535991366!3d36.682252635024184!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14dbe962653d308f%3A0x467dd49399d0d14a!2sG%C3%BCneyyurt%2C%2070402%20G%C3%BCneyyurt%2FErmenek%2FKaraman!5e0!3m2!1str!2str!4v1673271577056!5m2!1str!2str" />
            </AspectRatio>
          </>

          <Footer />
        </Suspense>
      </Stack>
    </>
  );
}
