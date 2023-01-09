import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
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
            bgGradient="linear(to-l, #FF0060, #FF0080)"
            bgClip="text"
            fontSize="6xl"
            fontWeight="extrabold"
            pos={"absolute"}
            //zIndex={2}
          >
            Güven Otel
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default Hotel;
