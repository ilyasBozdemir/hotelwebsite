import {
  Box,
  Stack,
  Text,
  Flex,
  HStack,
  Icon,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import TimeBasedImageTimeBasedImage from "./TimeBasedImage";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";

function Hotel() {
  const date = new Date();
  const currentHour = date.getHours();
  const [bg, setBg] = useState(null);
  const [fixed, setFixed] = useState(false);

  React.useEffect(() => {
    function handleScroll() {
      if (window.pageYOffset > 50) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  React.useEffect(() => {
    if (currentHour >= 6 && currentHour < 18) {
      setBg("light");
    } else {
      setBg("dark");
    }
  }, [currentHour]);

  return (
    <>
      <Box pos={"relative"}>
        <Box>
          <TimeBasedImageTimeBasedImage
            // dayImage={"/images/otel-dis-gunduz.jpg"}
            dayImage={"/images/otel-dis-gunduz.jpg"}
            //nightImage={"/images/otel-dis-gunduz.jpg"}
            nightImage={"/images/otel-dis-gece.jpeg"}
          />
          <Stack
            direction={"column"}
            zIndex={2}
            top={0}
            left={0}
            position="absolute"
            h={20}
            as={Flex}
            w={"full"}
            spacing={0}
            backgroundColor={bg === "dark" ? "black" : "white"}
            color={bg === "dark" ? "white" : "black"}
            boxShadow={
              bg === "dark"
                ? "0px 10px 20px rgba(0, 0, 0, 0.5)"
                : "0px 10px 20px rgba(255, 255, 255, 0.5)"
            }
          >
            <HStack
              as={Flex}
              justifyContent={"space-between"}
              textAling={"center"}
              fontSize={{ base: 12, md: 14 }}
            >
              <HStack
                fontFamily={"Georgia"}
                spacing={3}
                p={3}
                
              >
                <Icon as={BsFillTelephoneFill} />
                <Text display={{ base: "none", md: "flex-inline" }}>
                  Rezervasyon:{" "}
                </Text>
                <Link href={"tel:+903387368005"} legacyBehavior>
                  <a>0338 736 80 05</a>
                </Link>
                <Icon as={BsFillTelephoneFill} />

                <Link href={"tel:+905435403160"} legacyBehavior>
                  <a>0543 540 31 60</a>
                </Link>
              </HStack>
              <HStack
                fontFamily={"Georgia"}
                spacing={3}
                p={3}
              >
                <Icon as={FaMapMarkerAlt} />
                <Link
                  href={
                    "https://www.google.com/maps/place/G%C3%BCneyyurt,+70402+G%C3%BCneyyurt%2FErmenek%2FKaraman/@36.6822526,32.7908054,14z/data=!3m1!4b1!4m5!3m4!1s0x14dbe962653d308f:0x467dd49399d0d14a!8m2!3d36.68222!4d32.808315"
                  }
                  legacyBehavior
                >
                  <a target="_blank" rel="noopener noreferrer">
                    Güneyyurt
                  </a>
                </Link>
              </HStack>
            </HStack>
            <Divider />
            <HStack
              as={Flex}
              w={"full"}
              justifyContent={"space-between"}
              textAlign={"center"}
              h={8}
              pos={'relative'}
            >
              <Text
                fontSize="3xl"
                fontFamily={"Georgia"}
                cursor={"pointer"}
              >
                <Link href={"/"} legacyBehavior>
                  <Text cursor={"pointer"} as={"a"}>
                    Güven Otel
                  </Text>
                </Link>
              </Text>
              <Stack
                direction={"row"}
                spacing={6}
              >
                <Link href={"/"} legacyBehavior>
                  <Text cursor={"pointer"} as={"a"}>
                    Anasayfa
                  </Text>
                </Link>
                <Link href={"/hakkimizda"} legacyBehavior>
                  <Text cursor={"pointer"} as={"a"}>
                    Hakkımızda
                  </Text>
                </Link>
                <Link href={"/galeri"} legacyBehavior>
                  <Text cursor={"pointer"} as={"a"}>
                    Foto Galeri
                  </Text>
                </Link>
                <Link href={"/iletisim"} legacyBehavior>
                  <Text cursor={"pointer"} as={"a"}>
                    İletişim
                  </Text>
                </Link>
              </Stack>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default Hotel;
