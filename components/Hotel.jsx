import { Box, Stack, Text, Flex, HStack, Icon,Divider } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import TimeBasedImageTimeBasedImage from "./TimeBasedImage";
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";

function Hotel() {
  const date = new Date();
  const currentHour = date.getHours();
  const [bg, setBg] = useState(null);

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
            dayImage={"/images/otel-dis-gunduz.jpeg"}
            //nightImage={"/images/otel-dis-gunduz.jpeg"}
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
          >
            <HStack
              as={Flex}
              h={20}
              backgroundColor={bg === "dark" ? "white" : "black"}
              justifyContent={"space-between"}
              textAling={"center"}
            >
              <HStack
                color={bg !== "dark" ? "white" : "black"}
                fontSize={13}
                fontFamily={"Georgia"}
                spacing={3}
                p={3}
              >
                <Icon as={BsFillTelephoneFill} fontSize={18}/>
                <> Rezervasyon: </>
                <Link href={"tel:+903387368005"} legacyBehavior>
                  <a>0338 736 80 05</a>
                </Link>
                <Icon as={BsFillTelephoneFill} fontSize={18}/>
                
                <Link href={"tel:+905435403160"} legacyBehavior>
                  <a>0543 540 31 60</a>
                </Link>

              </HStack>
              <HStack
                color={bg !== "dark" ? "white" : "black"}
                fontSize={13}
                fontFamily={"Georgia"}
                spacing={3}
                p={3}
              >
               
              </HStack>
            </HStack>
            <Divider/>
            <HStack
              as={Flex}
              w={"full"}
              h={10}
              backgroundColor={bg === "dark" ? "white" : "black"}
              justifyContent={"space-between"}
              textAling={"center"}
            >
              <Text
                color={bg !== "dark" ? "white" : "black"}
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
              <Stack direction={"row"} spacing={6}>
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
                    Galeri
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
