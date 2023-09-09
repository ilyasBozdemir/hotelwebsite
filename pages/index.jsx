import Head from "next/head";
import {
  Center,
  Stack,
  Flex,
  Heading,
  HStack,
  Icon,
  Box,
  Image,
  Text,
} from "@chakra-ui/react";
import React, { Suspense } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
const Hotel = React.lazy(() => import("../components/Hotel"));
const Map = React.lazy(() => import("../components/Map"));

export default function Home({ message }) {
  const desc = `Güven Otel, şık ve sade dekorasyonu ile dikkat çeker. 26 odalı otelimiz, sadece kat hizmeti sunarak konuklarımızın konforlu bir konaklama deneyimi yaşamasını sağlar`;
  const canonicalUrl = "https://www.guvenotell.com/";
  return (
    <>
      <Head>
        <title>Güven Otel • Rezervasyon 0543 540 31 60</title>
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
        <meta
          name="keywords"
          content="hotel, otel, ermenek otel, güneyyurt otel"
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
      </Head>
      <>
        <Suspense fallback={<div>Yükleniyor...</div>}>
          <Stack as={"main"}>
            <Hotel />
            <Box bg={"gray.200"}>
              <Center>
                <Stack
                  p={"100px 30px"}
                  m={"0 auto"}
                  maxW={"container.xl"}
                  boxShadow={"0 0 30px 0 rgb(33 30 25 / 10%)"}
                  spacing={10}
                  data-aos="fade-down"
                  data-aos-easing="linear"
                  data-aos-duration="250"
                >
                  <Text
                    as={Center}
                    data-aos="fade-down"
                    colorScheme="blue"
                    fontSize={30}
                  >
                    Hakkımızda
                  </Text>
                  <Stack
                    as={Flex}
                    bg={"white"}
                    direction={{ base: "column", lg: "row" }}
                    boxShadow={"0 0 30px 0 rgb(33 30 25 / 20%)"}
                    p={1}
                  >
                    <Box
                      boxShadow={"0 0 30px 0 rgb(33 30 25 / 20%)"}
                      border={"25px solid #fff"}
                      w={{ base: "full", lg: "40%" }}
                      data-aos="zoom-in-right"
                    >
                      <Image
                        borderRounded={5}
                        rounded={5}
                        alt="otel-giris-resim"
                        draggable={false}
                        src="/images/giris.webp"
                        w={350}
                        h={"auto"}
                      />
                    </Box>
                    <Box
                      fontSize="18px"
                      w={{ base: "full", lg: "50%" }}
                      p={5}
                      data-aos="zoom-in-left"
                    >
                      <Heading
                        as="h2"
                        fontSize={20}
                        fontWeight={"semibold"}
                        textAling={{ base: "center", md: "start" }}
                      >
                        GÜVEN OTEL
                      </Heading>
                      <Text>
                        Güneyyurt Kasabasında konuklarına rahat ve huzurlu bir
                        konaklama deneyimi sunmak için tasarlanmış bir küçük
                        otel. Otel, 26 yatak kapasitesine sahiptir ve
                        konuklarının her türlü ihtiyacını karşılamak için temiz
                        ve modern odalar sunuyor.Konumumuz Ermenek ilçesine 10
                        km,Turkuaz baraj gölüne 14 km, Devlet Hastanesine 12
                        km,Ermenek Kapalı Cezaevine 13 km uzaklıktadır.
                      </Text>
                    </Box>
                  </Stack>
                </Stack>
              </Center>
            </Box>
            <>
              <Flex
                as="section"
                justifyContent={"space-between"}
                direction={{ base: "column", lg: "row" }}
                w={"full"}
                h={{ base: "350px", lg: "250px" }}
                my={4}
              >
                <Stack
                  w={{ base: "full", lg: "70%" }}
                  data-aos="fade-up"
                  data-aos-duration="750"
                >
                  <Heading as="h2" size="xl">
                    İletişim Bilgileri
                  </Heading>
                  <Stack
                    spacing={6}
                    direction={{ base: "column" }}
                    justify={{ base: "space-between" }}
                    p={15}
                  >
                    <HStack _hover={{ color: "gray.600" }}>
                      <Icon as={FaMapMarkerAlt} />

                      <Link
                        href={
                          "https://www.google.com/maps/place/G%C3%BCven+Otel/@36.6812645,32.8054781,15z/data=!4m5!3m4!1s0x0:0x50308dc7e9b79f7d!8m2!3d36.6812645!4d32.8054781"
                        }
                        legacyBehavior
                      >
                        <a target="_blank" rel="noopener noreferrer">
                          Güneyyurt Kasabası Belediye Yanı Ermenek - KARAMAN
                        </a>
                      </Link>
                    </HStack>
                    <HStack _hover={{ color: "gray.600" }}>
                      <Icon as={BsFillTelephoneFill} />
                      <Link href={"tel:+905435403160"} legacyBehavior>
                        <a>
                          <div
                            itemscope
                            itemtype="http://schema.org/Organization"
                          >
                            <span itemprop="telephone">0543 540 31 60</span>
                          </div>
                        </a>
                      </Link>
                    </HStack>
                    <HStack _hover={{ color: "gray.600" }}>
                      <Icon as={BsFillTelephoneFill} />
                      <Link href={"tel:+905312486322"} legacyBehavior>
                        <a>
                          <div
                            itemscope
                            itemtype="http://schema.org/Organization"
                          >
                            <span itemprop="telephone">0531 248 63 22</span>
                          </div>
                        </a>
                      </Link>
                    </HStack>
                  </Stack>
                </Stack>
                <Map zoom={13} />
              </Flex>
            </>
            <></>
          </Stack>
        </Suspense>
      </>
    </>
  );
}
