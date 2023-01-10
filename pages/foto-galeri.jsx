import React from "react";
import Head from "next/head";
import Header from "../components/Header";

import Footer from "../components/Footer";
import Link from "next/link";
import {
  Stack,
  Flex,
  Text,
  Wrap,
  WrapItem,
  Image,
  Box,
  Center,
} from "@chakra-ui/react";
import { Breadcrumb, BreadcrumbItem } from "@chakra-ui/react";

function GalleryPage() {
  var images = [
    {
      src: "/images/otel-dis-gece.jpeg",
      alt: "3",
    },
    {
      src: "/images/otel-dis-gunduz.jpg",
      alt: "3",
    },
    {
      src: "/images/giris.jpeg",
      alt: "2",
    },
    {
      src: "/images/giris-2.jpeg",
      alt: "2",
    },
    {
      src: "/images/giris-3.jpeg",
      alt: "2",
    },
    {
      src: "/images/kapi.jpeg",
      alt: "3",
    },
    {
      src: "/images/koridor.jpeg",
      alt: "3",
    },
    {
      src: "/images/lavabo-1.jpeg",
      alt: "3",
    },
    {
      src: "/images/lavabo-2.jpeg",
      alt: "3",
    },
    {
      src: "/images/lobi.jpeg",
      alt: "3",
    },
    {
      src: "/images/lobi-2.jpeg",
      alt: "3",
    },
    {
      src: "/images/manzara.jpeg",
      alt: "3",
    },
    {
      src: "/images/manzara-2.jpeg",
      alt: "3",
    },
    {
      src: "/images/merdiven.jpeg",
      alt: "3",
    },
    {
      src: "/images/oda.jpeg",
      alt: "3",
    },
    {
      src: "/images/oda-1.jpeg",
      alt: "3",
    },
    {
      src: "/images/oda-2.jpeg",
      alt: "3",
    },
    {
      src: "/images/oda-3.jpeg",
      alt: "3",
    },
    {
      src: "/images/oda-4.jpeg",
      alt: "3",
    },
    {
      src: "/images/oda-5.jpeg",
      alt: "3",
    },
  ];

  return (
    <>
      <Head>
        <title>Foto Galeri | Güven Otel</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <>
        <Header />
        <>
          <Stack direction={"column"} mt={5} bg={"gray.200"}>
            <Breadcrumb>
              <BreadcrumbItem>
                <>
                  <Link href={"/"} legacyBehavior>
                    <a>Anasayfa</a>
                  </Link>
                </>
              </BreadcrumbItem>

              <BreadcrumbItem isCurrentPage>
                <Text>Foto Galeri</Text>
              </BreadcrumbItem>
            </Breadcrumb>
            <Flex
              justifyContent={"space-between"}
              direction={{ base: "column", lg: "row" }}
              w={"full"}
              mt={30}
              display="table"
            >
              <>
                <Wrap
                  display="table-cell"
                  verticalAlign="middle"
                  textAlign="center"
                >
                  {images.map((img, i) => (
                    <WrapItem key={i}>
                      <Box
                        boxShadow={"0 0 30px 0 rgb(33 30 25 / 20%)"}
                        border={"10px solid #fff"}
                        overflow={"hidden"}
                      >
                        <Image
                          w={200}
                          src={img.src}
                          alt={img.alt}
                          transition="all .5s ease-in-out"
                          _hover={{
                            transform: "scale(1.50)",
                          }}
                        />
                      </Box>
                    </WrapItem>
                  ))}
                </Wrap>
              </>
            </Flex>
          </Stack>
        </>
        <Footer />
      </>
    </>
  );
}

export default GalleryPage;
