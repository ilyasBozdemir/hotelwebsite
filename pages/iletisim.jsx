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
  return (
    <>
      <Head>
        <title>İletişim | Güven Otel</title>
        <meta name="description" content="Generated by create next app" />
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
