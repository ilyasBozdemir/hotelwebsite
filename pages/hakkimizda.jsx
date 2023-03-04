import React from "react";
import Head from "next/head";
import { useBreakpointValue } from '@chakra-ui/react'
import Link from "next/link";
import {
  Stack,
  Flex,
  Heading,
  HStack,
  Box,
  Image as ChackraImage,
  Text,
  Icon

} from "@chakra-ui/react";
import Image from "next/image";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "@chakra-ui/react";
import { IoMdArrowDropright } from "react-icons/io";


export default function AboutUs() {
  const isMobile = useBreakpointValue({ base: true, md: false })

  const Content = () => {
    return (<>
      <Flex
        w={'full'}
        p={3}
        bgGradient={{ base: 'linear(to-r, gray.100, gray.400)', md: 'linear(to-r, gray.200, gray.300)' }}
        color={{ base: 'gray.600', md: 'gray.600' }}
        justifyContent={{ base: 'flex-start', md: 'center' }}
        direction={'column'}
        boxShadow={{ md: '10px 10px 20px 0px rgba(0,0,0,0.75)' }}
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="600"
      >
        <Text fontSize={40} fontFamily={'"Times New Roman", Times, serif'}
          fontWeight={'semibold'} textAlign={{ base: 'flex-start', md: 'center' }}>Güven Otel</Text>
        <Text fontSize={18} fontFamily={'"Times New Roman", Times, serif'}>
          Şirin Otel, konaklamanız için idealdir.
          Otelimiz 26 yataklıdır ve günlük ücreti kişi başı 100 TL'dir.
          Bu fiyata kahvaltı dahil değildir.
          Otelimizde 1 kişilik, 2 kişilik ve 3 kişilik odalar mevcuttur.
          Uzun süreli konaklamalar için fiyatlarımızda indirim yapılır.
          Konum olarak baktığımızda Ermenek ilçesine 10 km, Turkuaz Baraj Gölüne 14 km,
          Ermenek Devlet Hastanesine 12 km ve Ermenek Kapalı Cezaevine 13 km uzaklıktadır.
          aynı zamanda da doğal güzellikleri keşfetmek isteyenler için mükemmel bir konuma sahip hale getirir.
          Ermenek ve çevresinde gezinti yapmak isteyen misafirlerimize, Turkuaz Baraj Gölünü, Ermenek Devlet Hastanesini, Ermenek Kapalı Cezaevini ve Ermenek ilçesinin tarihi yerlerini ziyaret etmelerini tavsiye ederiz. Bu yerleri ziyaret etmeniz, Ermenek ve çevresinin güzelliklerini keşfetmenizi ve kalınan sürenizi daha keyifli hale getirmesini sağlar.
          Otelimizde konaklamanız sırasında sizlere hizmet vermeye devam edeceğiz.
        </Text>
      </Flex>
    </>)
  }

  const desc = `Şirin Otel, konaklamanız için idealdir.
  Otelimizde 1 kişilik, 2 kişilik ve 3 kişilik odalar mevcuttur.
  Uzun süreli konaklamalar için fiyatlarımızda indirim yapılır.
  Otelimizde Wi-Fi, sıcak su ve her odada TV mevcuttur.
  Konum olarak baktığımızda Ermenek ilçesine 10 km, Turkuaz Baraj Gölüne 14 km,
  Ermenek Devlet Hastanesine 12 km ve Ermenek Kapalı Cezaevine 13 km uzaklıktadır.
  aynı zamanda da doğal güzellikleri keşfetmek isteyenler için mükemmel bir konuma sahip hale getirir.
  Ermenek ve çevresinde gezinti yapmak isteyen misafirlerimize, Turkuaz Baraj Gölünü, Ermenek Devlet Hastanesini, Ermenek Kapalı Cezaevini ve Ermenek ilçesinin tarihi yerlerini ziyaret etmelerini tavsiye ederiz. Bu yerleri ziyaret etmeniz, Ermenek ve çevresinin güzelliklerini keşfetmenizi ve kalınan sürenizi daha keyifli hale getirmesini sağlar.
  Otelimizde konaklamanız sırasında sizlere hizmet vermeye devam edeceğiz.`;

  const canonicalUrl = 'https://www.guvenotell.com/hakkimizda';
  return (
    <>
      <Head>
        <title>Hakkımızda • Güven Otel</title>
        <link rel="canonical" href={canonicalUrl} />
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
        <meta name="keywords" content="hotel about, ermenek otel hakkımızda, güneyyurt otel hakkımızda ,hakkımızda " />
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

      </Head>
      <>
        <Stack>
          <Stack direction={"column"} mt={6} >
            <Breadcrumb separator={<Icon as={IoMdArrowDropright} />}>
              <BreadcrumbItem>
                <BreadcrumbLink as={Link} href={"/"} legacyBehavior>
                  <a>Anasayfa</a>
                </BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Text>Hakkımızda</Text>
              </BreadcrumbItem>
            </Breadcrumb>
            <Flex
              mt={30}
            >
              <Stack
                position='relative'
                fontFamily={"'Playfair Display',sans-serif"}
              >

                <Box display={{ base: 'none', md: 'initial' }}>
                  <Image
                    width={1600}
                    height={1200}
                    src='/images/giris.webp'
                    alt='giriş resmi'
                  />
                </Box>
                {
                  isMobile === true ? <>
                    <Box rounded={4} >
                      <Content />
                    </Box>
                  </>
                    : <>
                      <Box rounded={4} css={{
                        position: 'absolute',
                        top: '0',
                        left: '0',
                        color: 'white',
                        fontSize: '32px',
                        fontWeight: 'semibold',
                        padding: '10px',
                        fontSmoothing: 'antialiased',
                        width: '50%'

                      }}>
                        <Content />
                      </Box>
                    </>
                }

              </Stack>

            </Flex>
          </Stack>
        </Stack>
      </>
    </>
  );
}
