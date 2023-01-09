import { Box, Stack, Text, Flex, HStack } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import TimeBasedImageTimeBasedImage from "./TimeBasedImage";
import { useState } from "react";

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

          <HStack
            as={Flex}
            w={"full"}
            h={10}
            zIndex={2}
            top={0}
            left={0}
            backgroundColor={
              bg === "dark" ? "rgba(255, 255, 255, 0.5)" : "rgba(0, 0, 0, 0.5)"
            }
            position="absolute"
            justifyContent={"space-between"}
            textAling={"center"}
          >
            <Text
              color={bg !== "dark" ? "white" : "black"}
              fontSize="3xl"
              fontFamily={"Georgia"}
              cursor={'pointer'}
            >
              <Link href={"/"} legacyBehavior>
                <a>Güven Otel</a>
              </Link>
            </Text>
            <Stack direction={"row"} spacing={6}>
              <Link href={"/"} legacyBehavior>
                <a>Anasayfa</a>
              </Link>
              <Link href={"/hakkimizda"} legacyBehavior>
                <a>Hakkımızda</a>
              </Link>
              <Link href={"/galeri"} legacyBehavior>
                <a>Galeri</a>
              </Link>
              <Link href={"/iletisim"} legacyBehavior>
                <a>İletişim</a>
              </Link>
            </Stack>
          </HStack>
        </Box>
      </Box>
    </>
  );
}

export default Hotel;
