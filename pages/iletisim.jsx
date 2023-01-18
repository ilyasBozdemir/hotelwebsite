import React from "react";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  Stack,
  Flex,
  Heading,
  HStack,
  Icon,
  Image,
  Text,
  Box,
} from "@chakra-ui/react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";

function Contact() {
  const desc = `Otelimiz 26 yataklıdır.1 kişilik,2 kişilik ve 3 kişilik odalarımız mevcuttur.Uzun süreli konaklamalarda fiyatlarda indirim yapılır. Otelimizde Wi-Fi,sıcak su,her odada tv mevcuttur. Konumumuz Ermenek ilçesine 10 km,Turkuaz baraj gölüne 14 km,Devlet Hastanesine 12 km,Ermenek Kapalı Cezaevine 13 km uzaklıktadır.`;

  return (
    <>
      <Head>
        <title>İletişim • Güven Otel</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Güven Otel" />
        <meta name="twitter:description" content={desc} />

        <meta name="twitter:site" content="@Ilyasbzdmr70" />
        <meta name="og:title" content="Güven Otel" />
        <meta name="og:description" content={desc} />
        <meta name="og:type" content="website" />
        <meta charset="utf-8" />
        <meta
          name="google-site-verification"
          content="nT-gjFplTL9A7HSiOVq0-yMDbLSEh6Nb-7UV2Jr4QAk"
        />
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="/iletisim" />
      </Head>
      <Header />
      <Stack>
        <Stack direction={"column"} mt={10} bg={"gray.200"}>
          <Box w={"full"} h={400} overflow={"hidden"}>
            <Image src="/images/lobi-2-contact.jpg"  w={'full'}/>
          </Box>

          <Breadcrumb>
            <BreadcrumbItem>
              <>
                <Link href={"/"} legacyBehavior>
                  <a>Anasayfa</a>
                </Link>
              </>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <Text>İletisim</Text>
            </BreadcrumbItem>
          </Breadcrumb>
          <Flex
            justifyContent={"space-between"}
            direction={{ base: "column", lg: "row" }}
            w={"full"}
            h={{ base: "350px", lg: "250px" }}
            mt={30}
          >
            <Stack w={{ base: "full", lg: "45%" }}>
              <Heading as="h2" size="xl">
                İletişim Bilgileri
              </Heading>
              <Stack
                spacing={6}
                direction={{ base: "column" }}
                justify={{ base: "space-between" }}
                p={15}
              >
                <HStack>
                  <Icon as={FaMapMarkerAlt} />

                  <Link
                    href={
                      "https://goo.gl/maps/vUpGnwWD99PahxJJA"
                    }
                    legacyBehavior
                  >
                    <a target="_blank" rel="noopener noreferrer">
                      Güneyyurt Kasabası Belediye Yanı Ermenek - KARAMAN
                    </a>
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={BsFillTelephoneFill} />
                  <Link href={"tel:+905435403160"} legacyBehavior>
                    <a>0543 540 31 60</a>
                  </Link>
                </HStack>
                <HStack>
                  <Icon as={BsFillTelephoneFill} />
                  <Link href={"tel:+905312486322"} legacyBehavior>
                    <a>0531 248 63 22</a>
                  </Link>
                </HStack>
              </Stack>
            </Stack>

            <Stack
              w={{ base: "full", lg: "45%" }}
              as={"iframe"}
              ratio={1}
              allowFullcreen
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12798.874711885132!2d32.8054781!3d36.6812645!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x50308dc7e9b79f7d!2sG%C3%BCven%20Otel!5e0!3m2!1str!2str!4v1673430130316!5m2!1str!2str"
              />
          </Flex>
        </Stack>
      </Stack>
      <Footer />
    </>
  );
}

export default Contact;
