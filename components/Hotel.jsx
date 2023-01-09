import {
  Box,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "next/link";
import TimeBasedImageTimeBasedImage from "./TimeBasedImage";

function Hotel() {
  return (
    <>
      <Box pos={"relative"}>
        <Box>
          <TimeBasedImageTimeBasedImage
            dayImage={"/images/otel-dis-gunduz.jpeg"}
            nightImage={"/images/otel-dis-gece.jpeg"}
          />

          <Text
            bgGradient="linear(to-l, #000, #444)"
            bgClip="text"
            fontSize="xl"
            fontWeight="extrabold"
            pos={"absolute"}
            zIndex={2}
            top={15}
            left={15}
          >
            [Güven Otel Logo]
          </Text>

          <>
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
          </>

        </Box>
      </Box>
    </>
  );
}

export default Hotel;
