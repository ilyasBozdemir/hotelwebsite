import React, { lazy, Suspense } from "react";
import Head from "next/head";
import {
  Stack,
  Flex,
  Heading,
  HStack,
  Icon,
  Text,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import Link from "next/link";
import { IoMdArrowDropright } from "react-icons/io";
import ContactForm from "../components/ContactForm";

const Map = lazy(() => import("../components/Map"));

export default function Contact() {
  const desc = `Güven Oteli'ne ulaşmak için farklı yöntemlerimiz bulunmaktadır. İletişim sayfamız üzerinden bize mesaj gönderebilir, adres, telefon ve e-posta bilgilerimizi öğrenebilirsiniz. En kısa sürede size yanıt vermekten memnuniyet duyacağız`;
  const canonicalUrl = "https://www.guvenotell.com/iletisim";

  return (
    <>
      <Head>
        <title>İletişim • Güven Otel</title>
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
          content="hotel contact, otel iletişim, ermenek otel iletişim, güneyyurt otel iletişim"
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

        <script src="https://www.google.com/recaptcha/api.js?render=sitekey"></script>
      </Head>
      <Stack>
        <Stack direction={"column"} mt={6}>
          <Breadcrumb separator={<Icon as={IoMdArrowDropright} />}>
            <BreadcrumbItem>
              <>
                <BreadcrumbLink as={Link} href={"/"} legacyBehavior>
                  <a>Anasayfa</a>
                </BreadcrumbLink>
              </>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
              <Text>İletisim</Text>
            </BreadcrumbItem>
          </Breadcrumb>

          <Stack>
            <>
              <Suspense fallback={<div>Loading...</div>}>
                <Box zIndex={1} h={300} w={"100%"}>
                  <Map />
                </Box>
              </Suspense>
            </>
            <>
              <Flex
                w={"full"}
                p={3}
                m={5}
                direction={{ base: "column", md: "row" }}
                justifyContent={"space-between"}
              >
                <Stack
                  boxShadow={
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  }
                  flexShrink={0}
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <Heading
                    as="h6"
                    size="md"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="500"
                  >
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
                        href={"https://goo.gl/maps/vUpGnwWD99PahxJJA"}
                        legacyBehavior
                      >
                        <a target="_blank" rel="noopener noreferrer">
                          <address
                            itemscope
                            itemtype="http://schema.org/addressRegion"
                          >
                            <span itemprop="addressLocality">
                              Güneyyurt Kasabası Belediye Yanı Ermenek - KARAMAN
                            </span>
                          </address>
                        </a>
                      </Link>
                    </HStack>
                    <HStack>
                      <Icon as={BsFillTelephoneFill} />
                      <Link href={"tel:+905435403160"} legacyBehavior>
                        <a>
                          <Text
                            as="div"
                            color={"blue.500"}
                            fontWeight={"bold"}
                            itemscope
                            itemtype="http://schema.org/Organization"
                          >
                            <span itemprop="telephone">0543 540 31 60</span>
                          </Text>
                        </a>
                      </Link>
                    </HStack>
                    <HStack>
                      <Icon as={BsFillTelephoneFill} />
                      <Link href={"tel:+905312486322"} legacyBehavior>
                        <a>
                          <Text
                            as="div"
                            color={"blue.500"}
                            fontWeight={"bold"}
                            itemscope
                            itemtype="http://schema.org/Organization"
                          >
                            <span itemprop="telephone">0531 248 63 22</span>
                          </Text>
                        </a>
                      </Link>
                    </HStack>
                  </Stack>
                </Stack>
                <Stack
                  boxShadow={
                    "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"
                  }
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <ContactForm />
                </Stack>
              </Flex>
            </>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
