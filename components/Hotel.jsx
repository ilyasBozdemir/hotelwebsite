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
import Logo from './Logo'
import { useState } from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapMarkerAlt } from "react-icons/fa";


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
            // dayImage={"/images/otel-dis-gunduz.jpg"}
            dayImage={"/images/otel-dis-gunduz.png"}
            //nightImage={"/images/otel-dis-gunduz.jpg"}
            nightImage={"/images/otel-dis-gece.png"}
          />
        
        </Box>
      </Box>
    </>
  );
}

export default Hotel;
