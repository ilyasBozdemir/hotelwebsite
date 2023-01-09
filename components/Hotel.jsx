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
        </Box>

      </Box>
    </>
  );
}

export default Hotel;
